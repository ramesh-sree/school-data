const mongoose=require('mongoose');
const connectDatabase=require('../database/db')
const chapter=require('../models/chapters');
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
        const {chName}=event.pathParameters
        const chapters=await chapter.updateMany({ChName:chName},{$set:chapterObj})
        
        return{
            statusCode:200,
            body:JSON.stringify(chapters)         
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
        
    }


  }
