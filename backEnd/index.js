import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import addTrainRoute from "./routes/addTrain.js";
import seatRoute from "./routes/seat.js";
import cors from "cors";

import cookieParser from "cookie-parser";


const app = express();
dotenv.config();


const connect = async() =>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB")
}catch(error){
    throw error; //in this case our applicationwill crash
}
};

mongoose.connection.on("disconnected" ,() =>{
    console.log("mongoDB disconnected");
} );

// middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());



app.use("/api/auth" , authRoute);
app.use("/api/users" , usersRoute);
app.use("/api/seat" , seatRoute);
app.use("/api/addTrain" , addTrainRoute );


app.use((err , req , res , next) =>{
    const errorStatus = err.status || 500 ;
    const errorMessage = err.message || " something went wrong !";
    return res.status(errorStatus).json({
  
        success : false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack ,

});
});

// app.get("/users",(req , res) =>{
//     res.send("hello")
// })

app.listen(8800 ,() =>{
    connect();
    console.log("connected to backend !");
    console.log("app is online at port 8000");
})