const dynamodb=require('aws-sdk/clients/dynamodb')
const docClient=new dynamodb.DocumentClient()
let response;

module.exports.handler=async(event,context)=>{
    try{
    const {projectID,projectName,projectdescription}=JSON.parse(event.body)
    
    await docClient.put({
        TableName: 'projects',
        KeySchema: [{ AttributeName: 'projectID', KeyType: 'HASH' }], 
        AttributeDefinitions: [
            { AttributeName: 'projectID', AttributeType: 'S' },
            { AttributeName: 'projectName', AttributeType: 'S' },
            { AttributeName: 'projectdescription', AttributeType: 'S' }
          ],
        
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
    }catch (error) {
        console.error(error);
        return{
            statusCode:error.statusCode ||500,
            body:JSON.stringify({error:error.message})
        } 
      }
}