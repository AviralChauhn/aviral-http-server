const PORT = 8080;
const createServer = require("./createServer");
const server = createServer();
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
