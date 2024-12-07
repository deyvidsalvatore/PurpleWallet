import mongoose from 'mongoose';
import 'dotenv/config';

const MONGOURI = process.env.DB_URI?.toString() || '';

export async function connectDB() {
  try {
    await mongoose.connect(MONGOURI, {
      serverSelectionTimeoutMS: 5000,
    });
    const connection = mongoose.connection;

    if (connection) {
      connection.on('connected', () => {
        console.log('[purple-wallet]: Connected to MongoDB successfully!');
      });

      connection.on('error', (error) => {
        console.error('[purple-wallet]: Error connecting to MongoDB', error);
      });
    }
  } catch (error) {
    console.error('[purple-wallet]: Connection failed.', error);
  }
}

export async function disconnectDB() {
  try {
    if (mongoose.connection.readyState) {
      await mongoose.disconnect();
      console.log('[purple-wallet]: Disconnected from MongoDB.');
    }
  } catch (error) {
    console.error('[purple-wallet]: Error disconnecting from MongoDB', error);
  }
}
