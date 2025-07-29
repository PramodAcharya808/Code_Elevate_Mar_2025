import mongoose from "mongoose";

export const connectDB = async () => {
  const DB_URL = process.env.MONGO_URL;

  try {
    await mongoose.connect(DB_URL);

    console.log("Database connected");
  } catch (error) {
    console.error(`Database connection failed`, error.message);
    process.exit(1);
  }
};
