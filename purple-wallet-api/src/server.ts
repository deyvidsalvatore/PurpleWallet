import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send({welcome: "Hello, Welcome to Purple Wallet API"});
});

app.listen(port, () => {
  console.log(`[purple-wallet]: Server is Running at port: ` + port);
});