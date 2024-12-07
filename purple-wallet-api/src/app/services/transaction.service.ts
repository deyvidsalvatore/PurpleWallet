import { TransactionRepository } from "../repositories/transaction.repository";

const transactionRepository = new TransactionRepository();

export class TransactionService {
  async create(data: any, userId: string) {
    try {
      const transactionData = { ...data, userId };
      const transaction = await transactionRepository.create(transactionData);
      return { success: true, transaction };
    } catch (error) {
      console.error("Error creating transaction:", error);
      return { error: "Failed to create transaction" };
    }
  }

  async findAllByUser(userId: string) {
    try {
      const transactions = await transactionRepository.findAllByUser(userId);
      return { success: true, transactions };
    } catch (error) {
      console.error("Error fetching transactions:", error);
      return { error: "Failed to fetch transactions" };
    }
  }
}
