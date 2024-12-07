import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

const transactionService = new TransactionService();

export class TransactionController {
  create(req: Request, res: Response) {
    res.status(200).json({ message: "Mockup Transaction Success!" });
  }
}