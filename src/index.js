import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,(req,res)=>{
        console.llog(`server is listning on ${process.env.PORT}`)
    })
})
.catch(()=>{
    console.log("MONGODB CONNECTION FAILED!!!",err)
})


















/*import express from "express"
const app=express()
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("ERROE:",error)
            throw error
        }
        )
        app.listen(process.env.PORT,()=>{
            console.loh(`App is listning on ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("ERROR:",error)
        throw error
    }
})()*/