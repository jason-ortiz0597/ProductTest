import { config } from "dotenv";
import mongoose from "mongoose";

config();

export function connectDB() {
    mongoose.connect(process.env.mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB connected");
}

export default connectDB;