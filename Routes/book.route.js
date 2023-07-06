const express=require('express');
const {BookModel}=require("../Models/book.model")
const bookRouter = express.Router()



bookRouter.post("/add",async(req,res)=>{
    const {Title,Author,Genre,Description,Price}=req.body;

    try {
         let book= await new BookModel({Title,Author,Genre,Description,Price})
         book.save();
         res.status(200).send({msg:"book added to database"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})


bookRouter.delete("/delete/:bookID",async(req,res)=>{
    try {
        await BookModel.findByIdAndDelete({_id:req.params.bookID});
        res.status(200).send({msg:"book deleted"});
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

bookRouter.get("/",async(req,res)=>{
    let {Genre}=req.query
    let svalue=0;
    let filter={}
    if(Genre){
        filter.Genre=Genre
    }
    if(req.query.Price=="asc"){
         svalue=1
    }else{
         svalue=-1
    }
    try {
       let data= await BookModel.find(filter).sort({Price:svalue})
        res.send(data)
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})







module.exports={bookRouter}