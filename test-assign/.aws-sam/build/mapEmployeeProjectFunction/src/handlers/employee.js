const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    try{
    const {employeeID,employeeName,employeeDesignation}=JSON.parse(event.body)
    await docClient.put({
        TableName: 'employees',
        Item:{
            employeeID,
            employeeName,
            employeeDesignation
        }
    }).promise() 
       response={
        'statusCode':200,
        'body':JSON.stringify({message: 'employee details are created'})
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