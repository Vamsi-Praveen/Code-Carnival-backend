import mongoose from "mongoose";

const eventDates = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }
},{collection:"eventdates"})

export default mongoose.model("event",eventDates)