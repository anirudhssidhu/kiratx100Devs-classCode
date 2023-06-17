const fs = require("fs");

function fileRead(err, data) {
  console.log(`The contents of the file are -----\n`);
  console.log(data);
}
fs.readFile("a.txt", "utf-8", fileRead);
