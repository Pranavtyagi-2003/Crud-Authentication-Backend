import express from "express"
import cors from "cors"

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

import user from './routes/userRoutes.js'
import auth from './routes/authRoutes.js'

app.use("/api",user)
app.use("/api",auth)

export default app;