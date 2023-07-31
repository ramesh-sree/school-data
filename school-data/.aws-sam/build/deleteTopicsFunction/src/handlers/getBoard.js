const mongoose=require('mongoose');
const connectDatabase=require('../database/db')
const Course=require('../models/course');

const Board=require('../models/board');
    

module.exports.handler=async(event,context)=>{
  //mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/admin?retryWrites=true&w=majority')

    try {
        await connectDatabase();
       const board= await Board.find()
        
        
        return{
            statusCode:200,
            body:JSON.stringify(board)         
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
        
    }


  }