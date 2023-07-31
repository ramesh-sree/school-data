const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    const {projectID,projectName,projectdescription}=JSON.parse(event.body)
    await docClient.put({
        TableName: 'projects',
        Item:{
            projectID,
            projectName,
            projectdescription
        }
    }).promise() 
       response={
        'statusCode':200,
        'body':JSON.stringify({message: 'project details are created'})
       }
       return response

}