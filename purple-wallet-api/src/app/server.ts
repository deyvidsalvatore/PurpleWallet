import express, { Express, Request, Response } from "express";
import { AuthRoutes } from "./routes/auth.routes";
import bodyParser from "body-parser";

const app: Express = express();

app.use(bodyParser.json());

const authRoutes = new AuthRoutes();

app.get("/", (req: Request, res: Response) => {
  res.send({ welcome: "Hello, Welcome to Purple Wallet API" });
});
app.use("/auth", authRoutes.router);
export default app;