import mongoose from "mongoose";
export const connectdb=async()=>{
    await mongoose.set("strictQuery",false)
    await mongoose.connect("mongodb://localhost:27017/pep",()=>{
        console.log("Connect Successfully");
    })
}
