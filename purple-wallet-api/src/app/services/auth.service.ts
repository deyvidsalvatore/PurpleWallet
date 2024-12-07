import { SignUpRequest } from "../dtos/sign-up.request";
import bcrypt from "bcrypt";
import { AuthRepository } from "../repositories/auth.repository";

export class AuthService {
  
  private authRepository = new AuthRepository();
  
  signUp(request: SignUpRequest) {
    const hasPassword = bcrypt.hashSync(request.password, 10);
    const result = this.authRepository.create({...request, password: hasPassword});
    return { message: "Usuário cadastrado com sucesso!", user: result };
  }
}