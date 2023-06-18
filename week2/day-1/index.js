const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;

// function middleware1(req, res, next) {
//   console.log(`from inside middleware1 \n${req.body}`);
//   // res.send("This is by using respond and not request!");
//   next();
// }

// app.use(middleware1);
app.use(bodyParser.json());

function calculateSum(counter) {
  let sum = 0;
  for (var i = 1; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calculateFactorial(counter) {
  let prod = 1;
  for (var i = 1; i <= counter; i++) {
    prod *= i;
  }
  return prod;
}
function handleSum(req, res) {
  // const counter = req.headers.counter;
  // const counter = req.query.counter;

  counter = req.body.counter;

  let calculatedSum = calculateSum(counter);
  let calculatedMul = calculateFactorial(counter);
  var ansObject = {
    sum: calculatedSum,
    factorial: calculatedMul,
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

function createUser(req, res) {
  res.send("creating user.........");
}

function deleteUser(req, res) {
  res.send("deleting user .........");
}

app.get("/hello", sayHello);
app.get("/", givePage);
app.get("/handleSum", handleSum);
app.post("/createUser", createUser);
app.delete("/deleteUser", deleteUser);

function started() {
  console.log(`Example app listening on port ${port}.`);
}

app.listen(port, started);
