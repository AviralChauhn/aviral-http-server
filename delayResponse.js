const http = require("http");

const PORT = 8080;

http
  .createServer((request, response) => {
    const url = request.url;
    const delayInSeconds = parseInt(url.split("/delay/")[1]);
    if (!isNaN(delayInSeconds) && delayInSeconds > 0) {
      setTimeout(() => {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end(`Done after ${delayInSeconds} seconds`);
      }, delayInSeconds * 1000);
    } else {
      response.writeHead(400, { "Content-Type": "text/plain" });
      response.end("INVALID");
    }
  })
  .listen(PORT);
