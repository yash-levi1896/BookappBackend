let express=require('express');
const cors=require("cors")
const { connection } = require('./db');
const { bookRouter } = require('./Routes/book.route');
let app=express();
require('dotenv').config()
app.use(cors())
app.use(express.json());

app.get("/",async(req,res)=>{
    res.send("Home route for backend")
})

app.use("/books",bookRouter)





app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("some error occured can't connect to db")
    }
    console.log("server is running")
})