const http = require("http");

function createServer() {
  const server = http.createServer((req, res) => {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    let handler;
    if (pathname.startsWith("/delay/") && req.method === "GET") {
      handler = require("./functions/delayResponse");
    } else if (pathname === "/uuid" && req.method === "GET") {
      handler = require("./functions/uuid");
    } else if (pathname === "/json" && req.method === "GET") {
      handler = require("./functions/jsonContent");
    } else if (pathname.startsWith("/status/") && req.method === "GET") {
      handler = require("./functions/statusCode");
    } else if (pathname === "/html" && req.method === "GET") {
      handler = require("./functions/http");
    } else {
      handler = require("./functions/notFound");
    }

    handler(req, res);
  });

  return server;
}
module.exports = createServer;
