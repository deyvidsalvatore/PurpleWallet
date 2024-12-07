import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";
import { TransactionRequest } from "../dtos/transaction.request";

const transactionService = new TransactionService();

export class TransactionController {
  create(req: Request<{}, {}, TransactionRequest>, res: Response) {
    const body = req.body;

    if (!req.user?.sub) {
      console.error("User is not authenticated or invalid token payload");
      res.status(401).json({ error: "Unauthorized access" });
    }

    transactionService.create(body, req.user!.sub)
      .then((transaction) => {
        res.status(201).json(transaction);
      })
      .catch((error) => {
        console.error("Error creating transaction:", error);
        res.status(409).json({ error: "Failed to create transaction" });
      });
  }

  findAllByUser(req: Request, res: Response) {
    if (!req.user?.sub) {
      console.error("User is not authenticated or invalid token payload");
      res.status(401).json({ error: "Unauthorized access" });
    }

    transactionService.findAllByUser(req.user!.sub)
      .then((transactions) => {
        res.status(200).json(transactions);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
        res.status(500).json({ error: "Failed to fetch transactions" });
      });
  }
}
