const url = require("url");
function delayResponse(request, response) {
  const delayInSeconds = parseInt(
    url.parse(request.url).pathname.split("/").pop(),
    10
  );
  setTimeout(() => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(`Done after ${delayInSeconds} seconds`);
  }, delayInSeconds * 1000);
}
module.exports = delayResponse;
