const app = require('./app');
const http = require('http');
const server = http.createServer(app);
server.listen(8002,()=>{
    console.log("Server listening on port 8002");
})