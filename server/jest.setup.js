import mongoose from 'mongoose';
import { connectToMongoDb } from './utils/db.js';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB before running tests
beforeAll(async () => {
    await connectToMongoDb();
});

// Close MongoDB connection after all tests
afterAll(async () => {
    await mongoose.connection.close();
});
