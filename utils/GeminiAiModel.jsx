const {
  GoogleGenerativeAI,

} = require('@google/generative-ai')

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash',
})

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };


  export const chatSession = model.startChat({
    generationConfig,
  })

// import { GoogleGenerativeAI } from "@google/generative-ai";

// export async function GeminiAiModel(prompt) {
//   try {
//     const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

//     const model = genAI.getGenerativeModel({
//       model: "gemini-2.5-flash",
//     });

//     const result = await model.generateContent(prompt);

//     // Same workflow as your chatSession
//     const rawText = result.response.text();

//     const cleaned = rawText
//       .replace(/```json/g, "")
//       .replace(/```/g, "")
//       .trim();

//     return cleaned; // return output directly
//   } catch (error) {
//     console.error("Gemini Error:", error);
//     throw new Error("AI Failed To Generate Response");
//   }
// }

