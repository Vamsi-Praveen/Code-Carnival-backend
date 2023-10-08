import mongoose from "mongoose";
const Schema=mongoose.Schema;
const announcementsSchema=new Schema({
    description:{
        type:String,
        required:true
    },
},{collection:"announcements"});
export default mongoose.model("Announcements",announcementsSchema);
// announcements