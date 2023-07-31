const mongoose=require('mongoose');
const BoardSchema=new mongoose.Schema({
    
    BoardName:String,
    Bcode:String
  
})
module.exports=mongoose.model('board',BoardSchema);