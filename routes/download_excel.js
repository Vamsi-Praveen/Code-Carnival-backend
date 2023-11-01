import express from "express"
import {contestav, download_excel} from "../controllers/downloadExcel";
const router = express.Router();

router.get('/:id',download_excel)

router.get('/data/:id',contestav);

export default router