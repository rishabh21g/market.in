import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";

const app = express();
app.use(express.json());
const PORT = 4000;

app.use("/api/v1/user", userRoute);
app.get("/", (req  , res)=>{
    res.send("Working API")
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
