import express from "express";
import mongoose from "mongoose";
import router from "./routes/coding-routes.js";
import userRouter from "./routes/user-registration-routes.js";
import announcements_router from "./routes/announcements-routes.js";
import galleryRouter from "./routes/gallery-routes.js";
import admin_login_router from "./routes/admin-login-routes.js";
import excelrouter from "./routes/download_excel.js";
import questions_router from "./routes/coding_questions.js";
import cors from "cors";
import { scheduleJob } from "node-schedule";
import Coding from "./models/Coding.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/coding", router);
app.use("/user", userRouter);
app.use("/announcements", announcements_router);
app.use("/gallery", galleryRouter);
app.use("/admin", admin_login_router);
app.use('/user/downloadexcel', excelrouter)
app.use('/questions', questions_router);


const format_date = (oldDate) => {
    var p = oldDate.split(/\D/g)
    return [p[2], p[1], p[0]].join("-")
}

mongoose.connect("mongodb+srv://admin:admin@cluster0.1zxtgjb.mongodb.net/codecarnival")
    .then(() => app.listen(8000))
    .then(() => console.log("Securely connected to MongoDB and listening to port 8000"))
    .catch((err) => console.log(err));

scheduleJob('0 2 * * *', async () => {
    try {
        let date = format_date(new Date().toISOString().split('T')[0]);
        const data = await Coding.findOne({ _id: date })
        if (data) {
            data.completed = true;
            await data.save()
                .then((data) => {
                    console.log("modified")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    catch (err) {
        console.log(err)
    }
})