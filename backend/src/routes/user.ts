import express, { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { NewUserReqBody } from "../types/types.js";

const app = express.Router();

export const newUser = app.post(
  "/new",
  async (
    req: Request<{}, {}, NewUserReqBody>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { name, email, photo, _id, dob, gender, role } = req.body;
      const user = await User.create({
        name,
        email,
        photo,
        _id,
        dob,
        gender,
        role,
      });
      res.status(200).json({
        success: true,
        message: `${user.name} has been created successfully`,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message : error
      })
    }
  }
);
export default app;
