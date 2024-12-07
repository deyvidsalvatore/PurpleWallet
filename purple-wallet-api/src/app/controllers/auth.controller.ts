import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { SignUpRequest } from "../dtos/sign-up.request";
import { SignInRequest } from "../dtos/sign-in.request";

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
      .catch(error => {
        console.error("Unexpected error during sign-up:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }

  signIn(req: Request<{}, {}, SignInRequest>, res: Response) {
    authService.signIn(req.body)
      .then(result => {
        if (result.error) {
          return res.status(401).json({ error: result.error });
        }

        if (!result.token) {
          console.error("Token generation failed");
          return res.status(500).json({ error: "Failed to generate token" });
        }

        res.status(200).json({ token: result.token });
      })
      .catch(error => {
        console.error("Unexpected error during sign-in:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
}
