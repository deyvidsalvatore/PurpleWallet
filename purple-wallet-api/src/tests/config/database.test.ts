import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../../app/config/database';

describe('Database Connection', () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterAll(async () => {
    await disconnectDB();
  });

  test('should connect to MongoDB', () => {
    expect(mongoose.connection.readyState).toBe(1);
  });

  test('should disconnect from MongoDB', async () => {
    await disconnectDB();
    expect(mongoose.connection.readyState).toBe(0);
  });
});
