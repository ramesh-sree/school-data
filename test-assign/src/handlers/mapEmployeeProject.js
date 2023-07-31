const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    try{
    const {employeeID,projectID,roleID}=JSON.parse(event.body)
    await docClient.put({
        TableName: 'employeeMap',
        KeySchema: [{ AttributeName: 'roleID', KeyType: 'HASH' }], 
        AttributeDefinitions: [
            { AttributeName: 'employeeID', AttributeType: 'S' },
            { AttributeName: 'projectID', AttributeType: 'S' },
            { AttributeName: 'roleID', AttributeType: 'S' }
          ],
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
    }catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        } 
      }
}