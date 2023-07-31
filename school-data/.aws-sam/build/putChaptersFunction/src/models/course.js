const mongoose=require('mongoose');

const CourseSchema=new mongoose.Schema({
    
    course_id: String,
    name: String, 
   
    Class: String,
    medium :String,
    chapters :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'chapters'
    }],
    board:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'board'

    }],
    created_at:{
        type: Date,
        default: Date.now

    }
})
module.exports=mongoose.model('courses',CourseSchema);