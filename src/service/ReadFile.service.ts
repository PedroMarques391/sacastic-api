import { GoogleGenAI } from "@google/genai";
import { parser, prompt } from "../utils/index";
class ReadFileService {
  private model: GoogleGenAI;

  constructor() {
    const genAi = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    this.model = genAi;
  }

  async generateSummary(content: string): Promise<string> {
    try {
      const response = await this.model.models.generateContentStream({
        model: "gemini-2.5-flash",
        config: {
          temperature: 0.5,
          topP: 1,
        },
        contents: [
          {
            text: prompt,
          },
          {
            text: content,
          },
        ],
      });

      let text = "";
      for await (const chunk of response) {
        if (chunk.text) {
          text += chunk.text;
        }
      }

      return text;
    } catch (error) {
      console.error("Erro ao gerar resumo:", error);
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new Error(errorMessage);
    }
  }

  async readFile(buffer: Buffer<ArrayBufferLike>): Promise<string> {
    const pdfText = await parser(buffer);
    const response = await this.generateSummary(pdfText);
    return response;
  }
}

export const readFileService = new ReadFileService();
