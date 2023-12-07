const http = require("http");
const fs = require("fs");
const PORT = 8080;

fs.readFile("./index.html", function (error, html) {
  if (error) {
    throw error;
  } else {
    http
      .createServer((request, response) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
      })
      .listen(PORT);
  }
});
