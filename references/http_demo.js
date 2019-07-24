const http = require('http');

//createa server object
http.createServer((req,res)=> {
    //write respones
    res.write('Hello world');
    res.end();

}).listen(5000, () => console.log('server running...'));