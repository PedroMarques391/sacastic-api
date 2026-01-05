import { Router } from "express";
import { FileController } from "../controllers/File.controller";
import { upload } from "../utils";

const router = Router();
const fileController = new FileController();

router.get("/test", fileController.test);
router.post("/", upload.single("file"), fileController.file);

export default router;
