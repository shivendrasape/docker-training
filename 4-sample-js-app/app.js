



// console.log("---------------------------------");

// console.log("im js application ");  

// console.log("---------------------------------");



var http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
    res.write("hello world");
    res.end();
})
server.listen(3000)