const express = require("express");
const app = express();
const uuid = require("uuid");
const PORT = 8080;
const jsonContent = {
  slideshow: {
    author: "Yours Truly",
    date: "date of publication",
    slides: [
      {
        title: "Wake up to WonderWidgets!",
        type: "all",
      },
      {
        items: [
          "Why <em>WonderWidgets</em> are great",
          "Who <em>buys</em> WonderWidgets",
        ],
        title: "Overview",
        type: "all",
      },
    ],
    title: "Sample Slide Show",
  },
};
app.get("/", (req, res) => {
  res.send(
    `enter your /html to see html content <br> enter /json to see json content <br> enter /uuid in the url to generate and view uuid <br> enter /status/(your code) to get status code page  <br> enter /delay/(desired seconds) to load the page after the mentioned seconds`
  );
});
app.get("/html", (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
      <p> - Martin Fowler</p>

  </body>
</html>
  `);
});
app.get("/json", (req, res) => {
  res.send(JSON.stringify(jsonContent));
});
app.get("/uuid", (req, res) => {
  const newID = uuid.v4();
  const uuidJson = {
    uuid: newID,
  };
  res.send(JSON.stringify(uuidJson));
});
app.get("/status/:status", (req, res) => {
  const statusCode = parseInt(req.params.status);
  if (statusCode >= 100 && statusCode <= 599) {
    // res.writeHead(statusCode, { "Content-Type": "text/plain" });
    app.use((req, res, next) => {
      res.status(statusCode);
      next();
    });
    res.send(`status:${statusCode}`);
  } else {
    res.send(`invalid status`);
  }
});
app.get("/delay/:delayInSeconds", (req, res) => {
  if (req.params.delayInSeconds != null) {
    setTimeout(() => {
      res.send(`delayed by ${req.params.delayInSeconds}`);
    }, req.params.delayInSeconds * 1000);
  } else {
    res.send(`please specify delay value in url`);
  }
});
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
