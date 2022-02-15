import mongoose from 'mongoose';

const dataBase = "api-test";
export async function connect(): Promise<void> {
  mongoose.connect(`mongodb://localhost:27017/${dataBase}`);

  mongoose.connection.once("open", () => {
    console.log("Connection established successfully");
  });
}