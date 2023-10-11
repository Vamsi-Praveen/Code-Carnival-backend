import mongoose from "mongoose";
const Schema=mongoose.Schema;
const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    hackerrank:{
        type:String,
        required:true
    },
    coding_date:{
        type:String,
        required:true
    },
    _id:{
        type:String,
        required:true
    }
},{collection:"users"});
export default mongoose.model("UserRegistration",userSchema);
// coding