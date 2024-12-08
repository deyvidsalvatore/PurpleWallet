import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { isAuthenticated } from "../middlewares/auth.middleware";

export class AuthRoutes {
  private readonly authController: AuthController = new AuthController();
  
  readonly router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private async initializeRoutes() {
    this.router.post("/signup", this.authController.signUp);
    this.router.post("/signin", this.authController.signIn);
    this.router.get("/me", isAuthenticated, this.authController.authLogged);
  }
}
