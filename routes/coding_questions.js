import express from "express"
import { addQuestions, getQuestions, getQuestionsById } from "../controllers/coding_questions.js";
const questions_router = express.Router();

questions_router.get('/getquestions',getQuestions);
questions_router.post('/addquestions',addQuestions);
questions_router.get('/getbyid/:id',getQuestionsById);

export default questions_router;