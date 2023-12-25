const http = require("http");
const url = require('url');
const fs = require('fs')
const path = require('path');

const port = 3002;

const pathName = path.join(__dirname,"file.html")

const server = http.createServer((req, res) => {
    res.end(pathName);
});

server.listen(port, (err) => {
    if(err){
        throw err;
    }
    console.log(`started listening on port ${port}`);
});





