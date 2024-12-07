import { model, ObjectId, Schema, SchemaTypes } from "mongoose";

interface Transaction extends Document {
  value: number;
  description: string;
  type: string;
  userId: ObjectId;
  created_at: Date;
};

const TransactionSchema = new Schema<Transaction>({
  value: { type: Number, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: "users" },
  created_at: { type: Date, required: true, default: Date.now() }
});

export default model("transactions", TransactionSchema);