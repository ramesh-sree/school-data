const mongoose=require('mongoose');
const BoardSchema=new mongoose.Schema({
    
    BoardName:
    {
        type:String,
        required:true
    },
    Bcode:{
        type:String,
        required:true
    }
  
})
module.exports=mongoose.model('board',BoardSchema);