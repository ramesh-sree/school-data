const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    try{
    const {roleID,roleName,roledescription}=JSON.parse(event.body)
    await docClient.put({
        TableName: 'roles',
        KeySchema: [{ AttributeName: 'roleID', KeyType: 'HASH' }], 
        AttributeDefinitions: [
            { AttributeName: 'roleID', AttributeType: 'S' },
            { AttributeName: 'roleName', AttributeType: 'S' },
            { AttributeName: 'roledescription', AttributeType: 'S' }
          ],
        Item:{
             roleID,
             roleName,
             roledescription

        }
    }).promise() 
       response={
        'statusCode':200,
        'body':JSON.stringify({massage: 'role details are created'})
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