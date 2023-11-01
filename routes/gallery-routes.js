import express from "express";
import { getGallery,insertGallery } from "../controllers/gallery-controller.js";
const galleryRouter = express.Router();
galleryRouter.get("/all",getGallery);
galleryRouter.post("/insert",insertGallery);
export default galleryRouter;