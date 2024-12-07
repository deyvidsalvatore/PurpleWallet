import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes {
  private readonly authController: AuthController = new AuthController();
  
  readonly router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/signup", this.authController.signUp);
  }
}
