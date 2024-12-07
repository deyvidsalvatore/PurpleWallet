import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send({ welcome: "Hello, Welcome to Purple Wallet API" });
});

export default app;
