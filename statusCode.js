const http = require("http");

const PORT = 8080;

http
  .createServer((request, response) => {
    const url = request.url;
    const statusCode = parseInt(url.split("/status/")[1]);
    if (!isNaN(statusCode) && statusCode >= 100 && statusCode <= 599) {
      response.writeHead(statusCode, { "Content-Type": "text/plain" });
      response.end(`Response with status code: ${statusCode}`);
    } else {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("Invalid status code");
    }
  })
  .listen(PORT);
