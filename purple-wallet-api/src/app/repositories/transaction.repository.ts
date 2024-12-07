import TransactionSchema from '../models/transaction.model';

export class TransactionRepository {

  async create(data: any) {
    return await TransactionSchema.create(data);
  }
  
  async findAllByUser(id: string) {
    return await TransactionSchema.find({ userId: id });
  }
}