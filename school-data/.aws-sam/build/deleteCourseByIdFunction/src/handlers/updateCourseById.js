const mongoose=require('mongoose');
const connectDatabase=require('../database/db')
const Course=require('../models/course');
const Board=require('../models/board');
    

module.exports.handler=async(event,context)=>{
  //mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/admin?retryWrites=true&w=majority')

    try {
        await connectDatabase();
        const {course_id,name,board ,Class,medium ,chapters }=JSON.parse(event.body)
        
        let courseObj={
            course_id,
            name, 
            board,
            Class, 
            medium ,
            chapters 
        }
        const {courseId}=event.pathParameters
        courseObj=await Course.updateOne({course_id:courseId},{$set:courseObj});
                                                      
        return{
            statusCode:200,
            body:JSON.stringify(courseObj)         
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
        
    }


  }
