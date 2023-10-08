import express from "express";
import { getAllRegistrations, registerUser } from "../controllers/user-registration-controller";
const userRouter = express.Router();
userRouter.get("/all",getAllRegistrations);
userRouter.post("/register",registerUser);
export default userRouter;