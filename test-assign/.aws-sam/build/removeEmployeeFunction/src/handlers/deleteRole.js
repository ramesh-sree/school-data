const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()


module.exports.handler=async(event,context)=>{
    
   const roleId=event.pathParameters.roleId

    var params={
        TableName: 'employeeMap',
       Key:{
         "roleID":roleId
       },
       
    };
   const body= await docClient.get(params).promise()
   
    var del={
     TableName: 'roles',
    Key:{
       "roleID":roleId
     },
   }
   if(body.Item.roleID==roleId){
    return{
      'body':JSON.stringify({message: 'role is mapped '})
    }
   }
   else{
    await docClient.delete(del).promise()
    
      return{
        statusCode:200,
        body:JSON.stringify({message: 'role is deleted Successfully '})
       }
    
   }
   
  
   
   
      
      
}