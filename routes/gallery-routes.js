import express from "express";

import { getGallery,insertGallery } from "../controllers/gallery-controller";

const galleryrRouter = express.Router();

galleryrRouter.get('/all',getGallery)

galleryrRouter.post('/',insertGallery)

export default galleryrRouter