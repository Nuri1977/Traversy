import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

//@des   Auth user & get token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(401);
  throw new Error("Something went wrong");

  res.status(200).json({ message: "Auth user" });
});

export { authUser };
