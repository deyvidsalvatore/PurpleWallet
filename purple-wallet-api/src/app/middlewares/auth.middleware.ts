import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export interface Payload {
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authToken = req.headers.authorization;
  if (!authToken) {
    res.status(401).json({ error: "Authorization token missing" });
  }

  const token = authToken!.split(" ")[1];

  if (!token) {
    res.status(401).json({ error: "Invalid token format" });
  }

  try {
    const decodedToken = verify(token, process.env.SECRET_KEY as string) as Payload;
    if (!decodedToken?.sub) {
      res.status(401).json({ error: "Invalid token payload;" });
    }

    req.user = { sub: decodedToken.sub };
    
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Invalid or expired token" });
  }
}
