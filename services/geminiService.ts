
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the PlumbPro Blackfoot AI Assistant. 
You are a helpful, professional, and knowledgeable plumbing expert serving the Blackfoot, Idaho area.

Your goal is to assist customers with:
1. **Service Inquiries**: We offer Drain Cleaning, Water Heater Repair (traditional and tankless), Pipe Replacement (copper and repiping), Sewer Line services, and general plumbing maintenance.
2. **Booking & Consultations**: Users can book an online consultation by clicking any "Book Now" or "Schedule Online" button on the site, which opens our official booking form (https://forms.gle/hNTdqpHQ1ZvMzK856). They can also call us directly.
3. **Emergency Situations**: We provide 24/7 emergency service. For immediate emergencies like burst pipes or major flooding, tell the user to call (208) 555-0123 immediately and turn off their main water valve.
4. **General Advice**: Help users diagnose common issues (leaky faucets, slow drains, noisy pipes) but emphasize that a professional inspection is required for a permanent fix and warranty.
5. **Company Info**: We are locally owned in Blackfoot since 2009. Address: 27 N 550 W, Blackfoot, ID 83221. We offer upfront pricing with no hidden fees.

Tone: Professional, reassuring, and community-focused. 
Important: Always recommend calling (208) 555-0123 for complex issues or immediate assistance.`;

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
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
      },
    });

    // Extract text directly from the response object as a property
    const text = response.text;
    return text || "I'm sorry, I'm having trouble connecting right now. Please call us directly at (208) 555-0123 for immediate help.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Graceful error handling for the user
    return "I apologize, but I'm experiencing a technical hiccup. For urgent plumbing help or to book a consultation, please call our Blackfoot office at (208) 555-0123.";
  }
};
