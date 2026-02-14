
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the PlumbPro Blackfoot AI Assistant. 
You are a helpful, professional, and knowledgeable plumbing expert. 
Your goal is to help users diagnose common plumbing issues and determine if they need to call an emergency plumber.
Keep your answers concise and always recommend calling (208) 555-0123 for complex issues.
If the issue sounds like a major leak or burst pipe, tell them to turn off their main water valve immediately.`;

export const getPlumbingAdvice = async (message: string, history: {role: 'user' | 'model', text: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
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
      },
    });

    return response.text || "I'm sorry, I couldn't process that request. Please call our support line.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please call us directly at (208) 555-0123 for immediate assistance.";
  }
};
