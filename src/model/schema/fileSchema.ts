import mongoose from "mongoose";

export const FileSchema = new mongoose.Schema(
  {
    originalName: String,
    path: String,
    size: Number,
    mimeType: String,
    status: {
      type: String,
      enum: ["UPLOADING", "PROCESSING", "COMPLETED", "ERROR"],
      default: "UPLOADING",
    },
    aiSummary: String,
  },
  { collection: "files" }
);
