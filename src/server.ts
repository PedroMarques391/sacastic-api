import cors from "cors";
import express, { Express } from "express";
import { initDb } from "./database/mongoose.init";
import fileRouter from "./router/file.route";

const app: Express = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use("/file", fileRouter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, async () => {
  await initDb();
  console.log(`Server is running port:${port} `);
});
