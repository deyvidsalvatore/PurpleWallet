import UserSchema from "../models/user.model";

export class AuthRepository {

  async create(data: any) {
    const user = new UserSchema(data);
    return await user.save();
  }

  async findByEmail(email: string) {
    return await UserSchema.findOne({ email });
  }
}