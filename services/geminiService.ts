
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `You are the PlumbPro Blackfoot AI Assistant. 
You are a helpful, professional, and knowledgeable plumbing expert serving the Blackfoot, Idaho area. 

STRICT FORMATTING RULES:
1. NEVER use asterisks (*) for any purpose. Do not use them for bolding, italics, or lists.
2. Use the bullet symbol (•) for all lists, service descriptions, and step-by-step instructions.
3. Keep answers clean, professional, and easy to read.
4. Do not use markdown headers (#), just use plain text with capitalization for emphasis.
5. Provide responses in a conversational but expert tone.

SERVICE KNOWLEDGE:
• Services include: Drain Cleaning, Water Heater Repair (traditional and tankless), Pipe Replacement, Sewer Line services, and general maintenance.
• Online Booking: Direct customers to the "Book Now" buttons or the official online form at https://forms.gle/hNTdqpHQ1ZvMzK856.
• Emergency: 24/7 service available. For immediate help, call (208) 555-0123.
• Emergency Advice: Always advise turning off the main water valve in case of active leaks or floods.
• Location: 27 N 550 W, Blackfoot, ID 83221. Local since 2009.
• Pricing: Upfront pricing, no hidden fees.

Always be polite and community-focused. If a situation sounds dangerous or complex, urge them to call (208) 555-0123 immediately.`;

export const getPlumbingAdvice = async (message: string, history: ChatMessage[]) => {
  try {
    // Ensure the API key exists and is not a placeholder string
    const apiKey = process.env.API_KEY;
    
    if (!apiKey || apiKey === 'undefined' || apiKey === 'null' || apiKey === '') {
      console.warn("API Key is missing or invalid. Check your environment variables.");
      return "I am currently in maintenance mode. For immediate plumbing assistance, please call us directly at (208) 555-0123.";
    }

    const ai = new GoogleGenAI({ apiKey });

    /**
     * Gemini Chat Requirements:
     * 1. History must start with a 'user' role.
     * 2. Roles must strictly alternate.
     */
    const formattedHistory: any[] = [];
    let lastRole: 'user' | 'model' | null = null;

    for (const msg of history) {
      // Skip initial model greeting as history must start with user
      if (formattedHistory.length === 0 && msg.role === 'model') continue;
      
      // Filter out consecutive messages with same role
      if (msg.role !== lastRole) {
        formattedHistory.push({
          role: msg.role,
          parts: [{ text: msg.text }]
        });
        lastRole = msg.role;
      }
    }

    // Initialize the dedicated chat interface
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
        topP: 0.95,
        topK: 40,
      },
      history: formattedHistory
    });

    // Request response for the latest message
    const result = await chat.sendMessage({ message });
    const responseText = result.text;
    
    if (!responseText) {
      throw new Error("Received empty response from the AI model.");
    }

    return responseText;
  } catch (error: any) {
    console.error("Gemini API Invocation Error:", error);
    
    // Provide a helpful fallback for common error codes
    const errorMsg = error?.message || "";
    if (errorMsg.includes('401') || errorMsg.includes('API_KEY')) {
      return "I'm having trouble with my connection right now. Please call our Blackfoot office at (208) 555-0123 for expert advice and service.";
    }
    
    // Bubble up to UI component catch block
    throw error;
  }
};
