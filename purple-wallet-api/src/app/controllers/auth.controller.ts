import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { SignUpRequest } from "../dtos/sign-up.request";

const authService = new AuthService();

export class AuthController {
  signUp(req: Request<{}, {}, SignUpRequest>, res: Response) {
    authService.signUp(req.body)
      .then(result => {
        if (result.error) {
          return res.status(400).json({ error: result.error });
        }
        res.status(201).json({ message: result.message });
      })
      .catch(() => {
        console.error("Unexpected error:");
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
}
