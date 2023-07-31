var http=require('http');
http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
    console.log('server is running...')
}).listen(8080)