const mongoose=require('mongoose');
const TopicsSchema=new mongoose.Schema({
    ChName:String,
    code:String,
    TopicName:String,
    videos:[]
  
})
module.exports=mongoose.model('topics',TopicsSchema);