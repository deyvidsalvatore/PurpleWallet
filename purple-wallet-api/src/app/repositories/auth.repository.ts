import UserSchema from "../models/user.model";
import 'dotenv/config';
import jwt from "jsonwebtoken";

export class AuthRepository {

  async create(data: any) {
    const user = new UserSchema(data);
    return await user.save();
  }

  async findByEmail(email: string) {
    return await UserSchema.findOne({ email });
  }

  async generateToken(userId: string) {
    return jwt.sign({ sub: userId }, process.env.SECRET_KEY as string, {
      expiresIn: '1h',
    });
  }
}