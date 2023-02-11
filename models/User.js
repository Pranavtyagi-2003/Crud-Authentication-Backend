import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"],
    },
    email:{
        type:String,
        required:[true,"Please Enter Email"],
    },
    phone:{
        type:String,
        required:[true,"Please Enter Phone"],
    },
    address:{
        type:String,
        required:[true,"Please Enter Address"],
    }
})
const UserModel = mongoose.model("user", UserSchema)
module.exports = UserModel
