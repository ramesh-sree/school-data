const mongoose=require('mongoose');
const TopicsSchema=new mongoose.Schema({
    ChName:
    {
        type:String,
        required:true
    },
    code:
    {
        type:String,
        required:true
    },
    TopicName:
    {
        type:String,
        required:true
    },

    videos:{
        Type: Array
    },
    created_at:{
        type: Date,
        default: Date.now

    }
  
})
module.exports=mongoose.model('topics',TopicsSchema);