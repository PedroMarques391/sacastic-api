import * as pdf from "pdf-parse";

export async function parser(buffer: Buffer<ArrayBufferLike>): Promise<string> {
  const pdfInstance = new pdf.PDFParse({ data: buffer });

  try {
    const result = await pdfInstance.getText();

    if (result.pages.length === 0) {
      throw new Error("PDF não contém páginas legíveis.");
    }

    const text = result.pages
      .map((page) => page.text?.trim())
      .filter(Boolean)
      .join("\n\n");

    if (!text || text.length < 20) {
      throw new Error("PDF não possui texto extraível.");
    }
    return text;
  } catch (error) {
    console.error("Erro ao processar PDF:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Erro inesperado ao processar o PDF.");
  } finally {
    pdfInstance.destroy();
  }
}
