const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()


module.exports.handler=async(event,context)=>{
    
   const roleId=event.pathParameters.roleId

    var params={
        TableName: 'employeeMap',
       Key:{
         "roleID":roleId
       },
       
    };try{

   const body= await docClient.get(params).promise()
    
  }catch (error) {
      console.error(error);
      return{
          statusCode:error.statusCode ||500,
          body:JSON.stringify({error:error.message})
      }
    }
    var del={
     TableName: 'roles',
    Key:{
       "roleID": roleId
     },
   }
   
   try{
    
   if(body.Item.roleID==roleId){
    return{
      'body':JSON.stringify({message: 'role is mapped '})
    }
   }
   else{
    await docClient.delete(del).promise()
      
  }
      return{
        statusCode:200,
        body:JSON.stringify({message: 'role is deleted Successfully '})
       }
      
      }catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        }
   
      }
   
   
      
      
}