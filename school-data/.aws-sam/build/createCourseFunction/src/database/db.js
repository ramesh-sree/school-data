const mongoose=require('mongoose');
let conn=null;
module.exports=connectDatabase=async()=>{
    if(conn==null){
        console.log('creating new connection to database');
        conn= await mongoose.connect('mongodb+srv://rameshsriramdas:rameshsriramdas@atlascluster.1zptzdw.mongodb.net/?retryWrites=true&w=majority', {
            serverSelectionTimeoutMS:5000
        });
        return conn;
    }
    console.log('connection already established')
}