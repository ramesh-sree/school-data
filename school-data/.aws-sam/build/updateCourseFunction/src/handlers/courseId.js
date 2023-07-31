const mongoose=require('mongoose');
const connectDatabase=require('../database/db')



const course = require('../models/course');
    

module.exports.handler=async(event,context)=>{
  //mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/admin?retryWrites=true&w=majority')

    try {
        await connectDatabase();
        const {courseId}=event.pathParameters
       const courses=await course.find({course_id:courseId})
        return{
            statusCode:200,
            body:JSON.stringify(courses)         
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
        
    }


  }
