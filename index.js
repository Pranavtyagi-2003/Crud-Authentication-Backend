import express from 'express'
import { connectdb } from './database.js';
import cors from 'cors'
const app = express();
const port = 5000;
connectdb();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("<h1>Hello m aagya</h1>")
})
app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})