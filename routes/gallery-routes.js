import express from "express";

import { getGallery,insertGallery } from "../controllers/gallery-controller.js";

const galleryrRouter = express.Router();

galleryrRouter.get('/all',getGallery)

galleryrRouter.post('/',insertGallery)

export default galleryrRouter