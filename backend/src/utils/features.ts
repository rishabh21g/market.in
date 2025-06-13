import mongoose from "mongoose";
import dotenv from "dotenv"

export const connectDB = () => {
  console.log("MONGO DB ULR: " + process.env.MONGODB_URL)
  mongoose
    .connect("mongodb+srv://25f1002822:september2001@marketin.ypusu85.mongodb.net/", {
      dbName: "MarketIN",
    })
    .then((res) => {
      console.log(`Connected with database ${res.connection.host}`);
    })
    .catch((err) => console.log(err));
};
