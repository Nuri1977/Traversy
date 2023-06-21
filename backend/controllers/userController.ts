import exp from "constants";
import { Request, Response } from "express";

//@des   Auth user & get token
//@route POST /api/users/auth
//@access Public
const authUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Auth user" });
};

export { authUser };
