import express from 'express'
import { connectdb } from './database.js';
const UserModel = require("./models/user")
import cors from 'cors'


const app = express();
const port = 5000;
connectdb();
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("<h1>Hello m aagya</h1>")
})

app.use(express.urlencoded({extended: true}))

app.post("/api/user", (req, res)=>{
    const SaveUser = new UserModel(req.body)
    SaveUser.save((error, savedUser)=>{
        if(error) throw error
        res.json(savedUser)
    })
})


app.listen(port,()=>{
    console.log(`Server running at ${port}`);
})