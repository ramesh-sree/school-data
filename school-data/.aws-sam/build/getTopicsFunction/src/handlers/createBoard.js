const mongoose=require('mongoose');
const connectDatabase=require('../database/db')
const Course=require('../models/course');

const Board=require('../models/board');
    

module.exports.handler=async(event,context)=>{
  //mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/admin?retryWrites=true&w=majority')

    try {
        await connectDatabase();
        const {BoardName,Bcode}=JSON.parse(event.body)
        
        let boardObj={
        
           BoardName,
           Bcode
        }
        boardObj=await Board.create(boardObj);
        await Course.updateMany({},{$push:{board:boardObj._id}})
        return{
            statusCode:200,
            body:JSON.stringify(boardObj)         
        }
    } catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
        
    }


  }
