let mongoose=require('mongoose');

let bookSchema=mongoose.Schema({
     Title:String,
    Author:String,
 Genre:{
   type:String,
    enum:["Fiction","Science","comic"]
 } ,
 Description: String,
 Price:Number
})

let BookModel=mongoose.model("Book",bookSchema);

module.exports={BookModel}