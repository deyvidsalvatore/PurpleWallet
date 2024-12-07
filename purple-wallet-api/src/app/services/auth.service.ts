import { AuthRepository } from "../repositories/auth.repository";
import bcrypt from "bcrypt";

export class AuthService {
  private authRepository = new AuthRepository();

  async signUp(data: any) {
    try {
      const userExists = await this.authRepository.findByEmail(data.email);

      if (userExists) {
        return { error: "Email already registered" };
      }
  
      const hashedPassword = await bcrypt.hash(data.password, 10);

      await this.authRepository.create({ ...data, password: hashedPassword });
      return { message: "User created successfully" };
    } catch (error) {
      console.error("Error during sign up:", error);
      return { error: "Failed to process request" };
    }
  }
}
