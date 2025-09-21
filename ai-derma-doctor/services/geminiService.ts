
import { GoogleGenAI, Type } from "@google/genai";
import type { SkinAnalysis } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
      skinType: { 
        type: Type.STRING, 
        description: "The identified skin type (e.g., Oily, Dry, Combination, Normal, Sensitive)." 
      },
      analysis: { 
        type: Type.STRING, 
        description: "A brief, 1-2 sentence analysis of the skin in the image, highlighting key characteristics observed." 
      },
      advice: {
        type: Type.ARRAY,
        description: "A list of 3-5 concise, actionable skincare advice points tailored to the identified skin type.",
        items: { type: Type.STRING }
      }
    },
    required: ["skinType", "analysis", "advice"]
};

export const analyzeSkinImage = async (imageFile: File): Promise<SkinAnalysis> => {
  const imagePart = await fileToGenerativePart(imageFile);
  
  const textPart = {
    text: `You are an expert dermatologist. Analyze the provided image of human skin. Based on the visual characteristics, identify the primary skin type. Then, provide a brief analysis and a list of actionable skincare and lifestyle advice points tailored to this skin type. Ensure your response adheres to the provided JSON schema.`
  };
  
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { parts: [imagePart, textPart] },
        config: {
          responseMimeType: "application/json",
          responseSchema: analysisSchema,
        },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("Received an empty response from the API.");
    }
    
    const parsedJson = JSON.parse(jsonText);
    return parsedJson as SkinAnalysis;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get analysis from Gemini API.");
  }
};
