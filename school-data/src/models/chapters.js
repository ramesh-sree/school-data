const mongoose=require('mongoose');
const ChapterSchema=new mongoose.Schema({
  course_id:
  {
    type:String,
    required:true
},
  code:{
      type:String,
      required:true
  } ,
  ChName:
  {
    type:String,
    required:true
}
   ,
  language:{
    type:String
  } ,
  topics :[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'topics'
}],

  created_at:{
    type: Date,
    default: Date.now

}
  
})
module.exports=mongoose.model('chapters',ChapterSchema);