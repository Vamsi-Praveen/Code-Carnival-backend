import mongoose from "mongoose";
const Schema=mongoose.Schema;
const gallerySchema=new Schema({
    imageurl:[{
        type:String,
        required:true
    }]
},{collection:"gallery"});
export default mongoose.model("Gallery",gallerySchema);
// coding