import UserSchema from "../models/user.model";
import 'dotenv/config';
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || '';

export class AuthRepository {

  async create(data: any) {
    const user = new UserSchema(data);
    return await user.save();
  }

  async findByEmail(email: string) {
    return await UserSchema.findOne({ email });
  }

  async generateToken(id: string) {
    return jwt.sign({ id }, SECRET_KEY, { expiresIn: 3600000});
  }
}