const express = require('express');
const server = express();
server.get('/',function(req,res){
res.send('<h2>Hola Mundo<h2>');
res.end();
})
server.listen(3000,()=>{
    console.log('Server on port 3000');
});
