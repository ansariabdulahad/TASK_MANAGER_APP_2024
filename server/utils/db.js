import { connect } from 'mongoose';

export const connectToMongoDb = async () => {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error('MongoDB URI is not defined. Check your environment variables.');
        process.exit(1);
    }

    try {
        await connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}