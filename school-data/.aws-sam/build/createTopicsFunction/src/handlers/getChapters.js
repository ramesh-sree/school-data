const mongoose=require('mongoose');
const connectDatabase=require('../database/db')
const Course=require('../models/course');

const Topics=require('../models/topics');
const chapter = require('../models/chapters');
    

module.exports.handler=async(event,context)=>{
  //mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/admin?retryWrites=true&w=majority')

    try {
        await connectDatabase();
       const chapters=await chapter.find().populate()
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
