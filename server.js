const http = require('http');

const handlServer = function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('<h2>Hola Mundo<h2>');
    res.end();
    }

const server = http.createServer(handlServer);

server.listen(3000,function(){
    console.log('Server on port 3000');
})