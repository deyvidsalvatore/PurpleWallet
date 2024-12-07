import { Request, Response } from "express";

export class AuthController {
  signUp = (req: Request, res: Response) => {
    res.status(201).send({ message: "Usuário cadastrado com sucesso" });
  };
}