const { v4: uuidv4 } = require("uuid");
const http = require("http");

const PORT = 8080;
http
  .createServer((request, response) => {
    const newID = uuidv4();
    const JSONobject = {
      uuid: newID,
    };
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(JSON.stringify(JSONobject));
    response.end();
  })
  .listen(PORT);
