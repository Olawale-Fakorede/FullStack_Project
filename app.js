import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser"
// import attendanceModel from "./Models/attendanceModels";
import attendanceRoute from "./routers/attendanceRoute.js";
import studentRoute from "./routers/studentRoute.js";
import tutorRoute from "./routers/tutorRoute.js"
import superAdminRoute from "./routers/superAdminRoute.js"

// import ensureAuthStudent from './UTILS/authStudentMiddleware.js'


const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(cookieParser())



// Routes
app.use(attendanceRoute)
app.use(studentRoute)
app.use(tutorRoute)
app.use(superAdminRoute)







const port = process.env.PORT

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {console.log(`App listening on ${port}`)})
        console.log("Connected to MongoDB succesfully")
    })
    .catch((error) => {
        console.log(error.message)
    });