import { Request, Response } from "express";
import { readFileService } from "../service/ReadFile.service";

export class FileController {
  async file(req: Request, res: Response) {
    try {
      const data = req.file;
      console.log(data);
      const buffer = data?.buffer;

      if (!buffer) {
        throw new Error("Ocorreu um erro ao processar o arquivo.");
      }

      const summary = await readFileService.readFile(buffer);

      if (!summary) {
        throw new Error("Ocorreu um erro ao processar o arquivo.");
      }

      res.status(200).send({
        summary: summary,
        originalName: data.originalname,
      });
    } catch (error) {
      console.error("Erro no controller:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao processar o arquivo.";
      res.status(500).send({
        error: errorMessage || "Ocorreu um erro ao processar o arquivo.",
      });
    }
  }
  async test(req: Request, res: Response) {
    try {
      res.send({ message: "route ok" });
    } catch (error) {
      console.error("Erro no controller:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao processar o arquivo.";
      res.status(500).send({ error: errorMessage });
    }
  }
}
