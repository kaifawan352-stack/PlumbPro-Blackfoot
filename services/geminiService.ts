
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
  // Access the environment variable directly as required.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  /**
   * Gemini Multi-turn Requirements:
   * 1. History must start with a 'user' role.
   * 2. Roles must strictly alternate (user, model, user, model...).
   */
  const contents: any[] = [];
  let lastAddedRole: 'user' | 'model' | null = null;

  for (const msg of history) {
    // Ensure the conversation starts with the user role.
    if (contents.length === 0 && msg.role === 'model') continue;
    
    // Ensure roles strictly alternate.
    if (msg.role !== lastAddedRole) {
      contents.push({
        role: msg.role,
        parts: [{ text: msg.text }]
      });
      lastAddedRole = msg.role;
    }
  }

  // Add the current user message.
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4,
        topP: 0.95,
        topK: 40,
      },
    });

    // Use the .text property to extract the response string.
    const responseText = response.text;
    
    if (!responseText) {
      throw new Error("The AI returned an empty response.");
    }

    return responseText;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    // Rethrow to allow the UI component to display its standard connection error message.
    throw error;
  }
};
