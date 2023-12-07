const contentInJson = require("../content.json");

function JsonContent(request, response) {
  const content = JSON.stringify(contentInJson);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(content);
}
module.exports = JsonContent;
