const express = require("express");

const app = express();

app.get("/", (request, response) => {
  //   console.log(request);
  response.send("Hello World!");
  //   console.log(response);
});
app.get("/date", (request, response) => {
  const date = new Date();
  response.send(`Today Date is ${date}.`);
});

app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
//   console.log(__dirname);
});

app.listen(3000);
