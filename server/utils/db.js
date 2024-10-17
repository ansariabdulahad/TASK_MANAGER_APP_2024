import { connect } from 'mongoose';

export const connectToMongoDb = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}