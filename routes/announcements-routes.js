import express from "express";
import { getAllAnnouncements,addAnnouncements,deleteAnnouncements } from "../controllers/announcements-controller";
const announcements_router=express.Router();
announcements_router.get("/all",getAllAnnouncements);
announcements_router.post("/add",addAnnouncements);
announcements_router.delete("/delete",deleteAnnouncements);
export default announcements_router;