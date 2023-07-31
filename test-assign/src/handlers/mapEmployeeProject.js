const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    const {employeeID,projectID,roleID}=JSON.parse(event.body)
    await docClient.put({
        TableName: 'employeeMap',
        Item:{
            employeeID,
            projectID,
            roleID
        }
    }).promise() 
       response={
        'statusCode':200,
        'body':JSON.stringify({massage: 'employee details are mapped'})
       }
       return response
}