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

  async signIn(data: any) {
    try {
      const user = await this.authRepository.findByEmail(data.email);

      if (!user) {
        return { error: "Email not found" };
      }

      const passwordOk = bcrypt.compareSync(data.password, user.password);

      if (!passwordOk) {
        return { error: "Incorrect password" };
      }

      const token = await this.authRepository.generateToken(user.id);

      if (!token) {
        return { error: "Failed to generate a valid token" };
      }

      return { token };
    } catch (error) {
      console.error("Error during sign in:", error);
      return { error: "Failed to process sign in" };
    }
  }

  async getLoggedUser(userId: string) {
    try {
      const user = await this.authRepository.findById(userId);

      if (!user) {
        return { error: "User not found" };
      }

      return { user };
    } catch (error) {
      console.error("Error fetching logged user data:", error);
      return { error: "Failed to fetch user data" };
    }
  }
}
