import mongoose from "mongoose";
const Schema=mongoose.Schema;
const adminSchema=new Schema({
    _id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{collection:"admin"});
export default mongoose.model("AdminLogin",adminSchema);
// adminlogin