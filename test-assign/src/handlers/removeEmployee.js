const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
  try{
    const employee=event.pathParameters.employee
    var params={
        TableName: 'employeeMap',
      Key:{
         "employeeID":employee
       },
       UpdateExpression : "REMOVE roleID",
        ReturnValues : "UPDATED_NEW"
    };
    
    await docClient.update(params).promise()

       response={
        'statusCode':200,
        'body':JSON.stringify({message: 'removed '})
       }
       return response
    }catch (error) {
      console.error(error);
      return{
          statusCode:error.statusCode ||500,
          body:JSON.stringify({error:error.message})
      } 
    }
}