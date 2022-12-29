const express = require("express");
const app = express();
const fs = require("fs");
const config = require("./config/config");
const token = require("./token/token");
const { v4: uuidv4 } = require("uuid");
const https = require("https");
const port = 1234;

//===================================================================
//
//      SERVER CONFIG
//
//==================================================================

console.log(__dirname);
app.use(express.static(__dirname + "/src"));

//===================================================================
//
//      SERVER ROUTES
//
//==================================================================

app.get("/config", (req, res) => {
  res.json(config);
  res.end();
});

app.get("/login", (req, res) => {
  let loginPage = fs.readFileSync("./src/index.html", "utf8");
  res.write(loginPage);
  res.end();
});

var username;
var emailaddress;

app.get("/token", (req, res) => {
  // const uuid = uuidv4();
  const sub = uuidv4();
  const name = username;
  const email = `${emailaddress}@qlik.com`;
  const groups = ["Demos"];

  const genT = token.generate(sub, name, email, groups);
  res.json({ token: genT });
});

app.get("/mashup", (req, res) => {
  queryString = req.query;
//   console.log(queryString);
  username = queryString.username;
  emailaddress = queryString.username.toLowerCase().replace(" ", ".");

  let mashFile = fs.readFileSync("./src/app.html", "utf8");
  res.write(mashFile);
  res.end();
});


//======================================================================================
//
//      SERVER CREATION
//
//======================================================================================
https
  .createServer(
    {
      key: fs.readFileSync("./server.key"),
      cert: fs.readFileSync("./server.cert"),
    },
    app
  )
  .listen(port, "127.0.0.1", function () {
    console.log(
      "Https Server listening on port 1234! Go to https://127.0.0.1:1234/"
    );
  });
