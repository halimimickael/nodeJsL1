const http = require("http");
const url = require('url');

const port = 3001;

const server = http.createServer((req, res) => {
    res.end('hello world');
});

server.listen(port, (err) => {
    if(err){
        throw err;
    }
    console.log(`started listening on port ${port}`);
});













// const fs = require('fs')
// const path = require('path');
// const { error } = require("console");

    // const pathName = path.join(__dirname,"file.html")

    // const parseUrl = url.parse(req.url)
    // const urlRoute = parseUrl.pathname;


    // if(urlRoute === "/"){
    //     res.end('welcome to my api')
    // }
    // else if(urlRoute === "/file"){
    // fs.readFile(pathName,(err,data)=>{
    //     if( err)
    //         throw err;
    //     res.end(data)
    // })}
    // else if(urlRoute === '/name'){
    //     res.end("Mickael Halimi")
    // }
    // else{
    //     res.end("wrong route")
    // }



