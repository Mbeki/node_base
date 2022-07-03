const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/about') {
        res.end('Here is our history')
    }
    if(req.url ==='/') {
        res.end('Welcome to our home page')
    }
    
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">Back to the homepage</a>
    `)
})

server.listen(5000)