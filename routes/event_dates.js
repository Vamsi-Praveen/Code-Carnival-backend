import express from "express"

import { addEventDate, getEvent } from "../controllers/eventdates.js"

const eventRoute  = express.Router();

eventRoute.post('/',addEventDate)
eventRoute.get('/',getEvent)

export default eventRoute;