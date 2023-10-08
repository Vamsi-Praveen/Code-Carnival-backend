import express from "express";
import { getAllCoding,getDateCoding,insertCoding,deleteCoding } from "../controllers/coding-controller";
const router=express.Router();
router.get("/all",getAllCoding);
router.get("/:id",getDateCoding);
router.post("/insert",insertCoding);
router.delete("/delete",deleteCoding);
export default router;