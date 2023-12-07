function notFound(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(`add /html to url to view html content 
  add /json to url to view json content
  add /uuid to url to generate and view uuid
  add /status/(code) for status
  add /delay/(seconds) to load after desired seconds
  `);
}
module.exports = notFound;
