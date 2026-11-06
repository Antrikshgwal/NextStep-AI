import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: process.env.GEMINI_MODEL || "gemini-3.1-flash-lite",
});

const retryableStatuses = new Set([429, 500, 503]);

export async function generateContent(prompt) {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await model.generateContent(prompt);
    } catch (error) {
      if (!retryableStatuses.has(error.status) || attempt === 2) {
        throw error;
      }

      await new Promise((resolve) =>
        setTimeout(resolve, 500 * 2 ** attempt)
      );
    }
  }

  throw new Error("Gemini request failed after retries");
}
