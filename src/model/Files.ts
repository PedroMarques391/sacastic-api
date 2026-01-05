import mongoose from "mongoose";
import { FileSchema } from "./schema/fileSchema";

export const FileModel = mongoose.model("File", FileSchema);
