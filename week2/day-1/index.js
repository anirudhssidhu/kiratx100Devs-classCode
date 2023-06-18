const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (var i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleSum(req, res) {
  counter = req.query.counter;
  let calculatedSum = calculateSum(counter);
  var ansObject = {
    sum: calculatedSum,
  };
  res.status(200).send(ansObject);
}

function givePage(req, res) {
  res.sendFile(__dirname + "/index.html");
}

function sayHello(req, res) {
  console.log(req.body);
  const name = req.body.name;
  console.log("Just saying hello to the client!");
  res.send(`Hello ${name}, Welcome to our website!`);
}

app.get("/hello", sayHello);
app.get("/", givePage);
app.get("/handleSum", handleSum);

function started() {
  console.log(`Example app listening on port ${port}.`);
}

app.listen(port, started);
