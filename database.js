import mongoose from "mongoose";

let url = "mongodb+srv://PranavTyagi:Ptyagi123@cluster0.fe2095j.mongodb.net/crudOperation?retryWrites=true"

// let url = "mongodb://127.0.0.1:27017/fitnessclub"
export const connectDB = async()=>{
   mongoose.set("strictQuery", false);
   const {connection} = await mongoose.connect(url); 
   console.log(`MongoDB connected with ${connection.host}`);  
} 

