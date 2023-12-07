const http = require("http");
const contentInJson = require("./content.json");
const content = JSON.stringify(contentInJson);
const PORT = 8080;
http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(content);
    response.end();
  })
  .listen(PORT);
