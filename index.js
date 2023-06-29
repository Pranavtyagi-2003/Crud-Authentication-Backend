import app from "./app.js";
import {connectDB} from './database.js'

const port = 5000;
connectDB();

app.get("/",(req,res)=>{
  res.write("<h1>Server Working</h1>");
})

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
