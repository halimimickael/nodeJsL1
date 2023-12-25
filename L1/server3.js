const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')

const port = 3003

const server = http.createServer((req, res) => {
  const pathName = path.join(__dirname, 'file.html')
  const parsedUrl = url.parse(req.url)
  const urlRoute = parsedUrl.pathname

  if (urlRoute === '/') {                    
    res.end('Hello World')
  } else if (urlRoute === '/file') {
    fs.readFile(pathName, (err, data) => {
      if (err) throw err
      res.end(data)
    })
  } else if (urlRoute === '/name') {
    res.end('Mickael Halimi')
  } else {
    console.log("wrong route")
  }
})

server.listen(port, () => {
  console.log(`started listening on port ${port}`)
})
