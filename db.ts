import mongoose from "mongoose";

const DB_URI="mongodb://0.0.0.0:27017/myTODO"

const dbConfig = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(`connected to database on port ${conn.connection.host}`);
  } catch (error) {
    console.log(`failed to connect to database` , error);
  }
};

export default dbConfig;
