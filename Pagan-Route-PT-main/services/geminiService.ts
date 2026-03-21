
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Gemini API features will not work.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateMantra = async (intention: string): Promise<string> => {
    if (!process.env.API_KEY) {
        return "API Key não configurada. A funcionalidade de IA está desativada.";
    }
    
    const prompt = `Você é um oráculo místico. Baseado na seguinte intenção, crie um mantra curto, poderoso e afirmativo em português para carregar um sigilo mágico. O mantra deve estar no tempo presente, ser conciso e inspirador. Intenção: "${intention}"`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.8,
                topP: 0.9,
            }
        });
        // FIX: Per coding guidelines, use response.text directly to get the generated text.
        return response.text;
    } catch (error) {
        console.error("Error generating mantra with Gemini API:", error);
        return "Houve um erro ao contatar a sabedoria cósmica. Tente novamente mais tarde.";
    }
};