import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document {
  _id: string;
  photo: string;
  role: "ADMIN" | "USER";
  name: string;
  email: string;
  gender: "MALE" | "FEMALE";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  age: number; //Virtual
}
const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter your Id"],
    },
    photo: {
      type: String,
      required: [true, "Please enter your Profile URL"],
    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
    },
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      unique: [true, "Email Already Exist!"],
      required: [true, "Please enter your email id"],
      validator: validator.default.isEmail,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE"],
      required: [true, "Please enter your gender"],
    },
    dob: {
      type: Date,
      required: [true, "Please select your age"],
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.virtual("age").get(function () {
  const today = new Date();
  let dob = this.dob;
  let age = today.getFullYear() - dob.getFullYear();
  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  )
    return age--;
  else return age;
});
export const User = mongoose.model<IUser>("User", UserSchema);
