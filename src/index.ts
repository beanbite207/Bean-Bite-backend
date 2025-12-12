import express from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import logger from "./logger";
import connectDB from "./config/db";
import customerRouter from "./routes/customerRouter";
import adminRouter from "./routes/adminRouter";


connectDB()

const app=express()
const server=http.createServer(app)
dotenv.config();

app.use(cookieParser());
app.use(express.urlencoded());
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use('/api/customer',customerRouter)
app.use('/api/admin',adminRouter)

const PORT = process.env.PORT||3000 ;

server.listen(PORT,()=>{
    logger.info(`Server started on port ${PORT}`)
})
