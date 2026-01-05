import cors from "cors";
import express, { Express } from "express";
import { initDb } from "./database/mongoose.init";
import fileRouter from "./router/file.route";

const app: Express = express();
const port = 3000;

app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/file", fileRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDb();

export default app;
