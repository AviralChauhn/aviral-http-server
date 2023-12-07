const url = require("url");
function statusCode(request, response) {
  const statusCode = parseInt(
    url.parse(request.url).pathname.split("/").pop(),
    10
  );
  response.writeHead(statusCode, { "Content-Type": "text/plain" });
  response.end(`Response with status code: ${statusCode}`);
}
module.exports = statusCode;
