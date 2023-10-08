import express from "express";
import { login,defaultPassword,resetPassword } from "../controllers/admin-login-controller";
const admin_login_router=express.Router();
admin_login_router.post("/login",login);
admin_login_router.post("/defaultpassword",defaultPassword);
admin_login_router.post("/resetpassword",resetPassword);
export default admin_login_router;