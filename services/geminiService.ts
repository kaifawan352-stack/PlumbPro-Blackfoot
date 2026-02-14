
import { GoogleGenAI } from "@google/genai";

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

export const getPlumbingAdvice = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  // Use the API key exclusively from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Format the history for the Gemini API
  const chatHistory = history.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.text }]
  }));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...chatHistory, { role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.4, // Lower temperature for more consistent professional formatting
        topP: 0.95,
        topK: 40,
      },
    });

    // Extract text directly from the response object
    const text = response.text;
    return text || "I apologize, but I am having trouble connecting to the service. Please call us directly at (208) 555-0123 for immediate assistance.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I am experiencing a technical issue. For urgent plumbing help or to book a consultation, please call our Blackfoot office at (208) 555-0123.";
  }
};
