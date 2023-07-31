const mongoose=require('mongoose');
const connectDatabase=require('../database/db')
const chapters=require('../models/chapters');
const Course=require('../models/course');

    

module.exports.handler=async(event,context)=>{
  //mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/admin?retryWrites=true&w=majority')

    try {
        await connectDatabase();
        const {course_id,code,ChName,language,topics}=JSON.parse(event.body)
        
        let chapterObj={
            course_id,
            code,
            ChName, 
            language,
            topics 
        }
        chapterObj=(await chapters.create(chapterObj));
        await Course.updateMany({course_id:chapterObj.course_id},{$push:{chapters:chapterObj._id}})
        return{
            statusCode:200,
            body:JSON.stringify(chapterObj)         
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
        
    }


  }
