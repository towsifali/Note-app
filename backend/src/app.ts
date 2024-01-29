import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import router from "./routes/notes";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", router);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction)=> {
  console.error(error);
  let errorMessage = "An Unknown Error Occurred";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ message: errorMessage });
})

export default app;