import express from "express";
import mongoose from "mongoose";
import router from "./routes/coding-routes";
import userRouter from "./routes/user-registration-routes";
import announcements_router from "./routes/announcements-routes";
import galleryRouter from "./routes/gallery-routes";
import admin_login_router from "./routes/admin-login-routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/coding",router);
app.use("/user",userRouter);
app.use("/announcements",announcements_router);
app.use("/gallery",galleryRouter);
app.use("/admin",admin_login_router);
mongoose.connect("mongodb+srv://admin:admin@cluster0.1zxtgjb.mongodb.net/codecarnival")
.then(() => app.listen(8000))
.then(() => console.log("Securely connected to MongoDB and listening to port 8000"))
.catch((err) => console.log(err));