import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

//@des   Auth user & get token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Auth user" });
});

//@des   Register a new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const userEXISTS = await User.findOne({ email });
  if (userEXISTS) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });
  if (user) {
    res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@des   Logout a user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logout  user" });
});

//@des   Get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get User profile" });
});

//@des   Update user profile
//@route PUT /api/users/profile
//@access Private
const updateUserProffile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Update User Proffile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProffile,
};
