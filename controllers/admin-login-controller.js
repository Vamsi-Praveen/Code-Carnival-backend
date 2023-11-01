import AdminLogin from "../models/AdminLogin.js";
import bcrypt from "bcryptjs";
export const login=async(req,res,next)=>{
    const {_id,password}=req.body;
    let existingUser;
    try{
        existingUser=await AdminLogin.findOne({"_id":_id});
    }
    catch(err){
        return console.log(err);
    }
    if(!existingUser){
        return res.status(404).json({message:"User not found!"});
    }
    const isPasswordCorrect=bcrypt.compareSync(password,existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message:"Incorrect Password!"});
    }
    return res.status(200).json({message:"Login successful!"});
};
export const defaultPassword=async(req,res,next)=>{
    const _id="admin",password="hod@aec.edu.in";
    const hashedPassword=bcrypt.hashSync(password);
    let existingUser;
    try{
        existingUser=await AdminLogin.findById(_id);
    }
    catch(err){
        return console.log(err);
    }
    if(existingUser){
        existingUser.password=hashedPassword;
        await existingUser.save();
    }
    return res.status(200).json({message:"Default password reset was successful!"});
};
export const resetPassword=async(req,res,next)=>{
    const password=req.body.password;
    const _id="admin";
    const hashedPassword=bcrypt.hashSync(password);
    let existingUser;
    try{
        existingUser=await AdminLogin.findById(_id);
    }
    catch(err){
        return console.log(err);
    }
    if(existingUser){
        existingUser.password=hashedPassword;
        await existingUser.save();
    }
    return res.status(200).json({message:"New password resetted successfully!"});
}