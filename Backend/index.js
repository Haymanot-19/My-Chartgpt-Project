import "dotenv/config";
import express from "express";
import cors from "cors";
import mainRouter from "./src/api/main.routes.js";
import { errorHandler } from "./src/middleware/error-handler.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", mainRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
