import { Document, model, Schema } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema = new Schema<User>({
  name: { type: String, required: true},
  email: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  createdAt:{ type: Date, default: Date.now()},
});

export default model("users", UserSchema);