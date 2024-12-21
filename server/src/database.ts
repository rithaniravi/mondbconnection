
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const dbUrl: string = process.env.MONGODB_URI as string;
console.log(dbUrl)

const connectToDatabase = async () => {
    try {
        await mongoose.connect(dbUrl)
            // {dbName: process.env.DB_NAME,
            // user: process.env.DB_USER,
            // pass: process.env.DB_PASS,});

        console.log("Connected to the db");
    } catch (err) {
        console.error("Failed to connect to the db", err);
    }
};

export default connectToDatabase;




