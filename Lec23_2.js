const http = require("http");

http.createServer((request, response) => {
  response.writeHead(200, "Working", {"Content-Type": "text/html"});
  response.write("<h1>Hello, Node.js!</h1>");
  response.end();
}).listen(process.env.PORT || 3000);
