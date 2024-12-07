import express, { Express, Request, Response } from "express";
import { AuthRoutes } from "./routes/auth.routes";
import bodyParser from "body-parser";
import { connectDB } from "./config/database";
import { TransactionRoutes } from "./routes/transaction.routes";

const app: Express = express();

connectDB();

app.use(bodyParser.json());

const authRoutes = new AuthRoutes();
const transactionRoutes = new TransactionRoutes();

app.get("/", (req: Request, res: Response) => {
  res.send({ welcome: "Hello, Welcome to Purple Wallet API" });
});

app.use("/auth", authRoutes.router);
app.use("/transactions", transactionRoutes.router);

export default app;