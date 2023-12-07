const { v4: uuidv4 } = require("uuid");

function uuidCreate(request, response) {
  const url = request.url;
  if (url == "/uuid") {
    const newID = uuidv4();
    const JSONobject = {
      uuid: newID,
    };
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(JSON.stringify(JSONobject));
    response.end();
  }
}
module.exports = uuidCreate;
