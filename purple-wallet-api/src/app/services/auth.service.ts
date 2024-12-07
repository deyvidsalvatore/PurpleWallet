import { SignUpRequest } from "../dtos/sign-up.request";

export class AuthService {
  signUp(signUpRequest: SignUpRequest) {
    return { message: "Usuário cadastrado com sucesso!", user: signUpRequest };
  }
}