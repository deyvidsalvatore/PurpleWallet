import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { SignUpRequest } from "../dtos/sign-up.request";

const authService = new AuthService();

export class AuthController {
  
  signUp = (req: Request<{}, {}, SignUpRequest>, res: Response) => {
    try {
      const body: SignUpRequest = req.body;
      res.status(201).json(authService.signUp(body));
    } catch (error) {
      res.status(500).json({ error: "Erro interno no servidor." });
    }
  };
}