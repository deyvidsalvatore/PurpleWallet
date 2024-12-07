import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

export class TransactionRoutes {
  private readonly transactionController: TransactionController = new TransactionController();
  readonly router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
  private async initializeRoutes() {
    this.router.post('', isAuthenticated, this.transactionController.create);
    this.router.get('', isAuthenticated, this.transactionController.findAllByUser);
  }
}