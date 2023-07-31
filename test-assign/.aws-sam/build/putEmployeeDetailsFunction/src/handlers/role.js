const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    const {roleID,roleName,roledescription}=JSON.parse(event.body)
    await docClient.put({
        TableName: 'roles',
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

}