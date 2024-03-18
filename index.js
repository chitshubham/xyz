const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const inputArray = req.body.array;
  const status = "success";
  const userId = 12345;
  const emailId = "user@example.com";
  const collegeRollNumber = "123456";

  const evenNumbers = inputArray.filter((num) => num % 2 === 0);
  const oddNumbers = inputArray.filter((num) => num % 2 !== 0);
  const uppercaseAlphabets = inputArray
    .filter((char) => /[a-z]/.test(char))
    .map((char) => char.toUpperCase());

  res.json({
    status,
    userId,
    emailId,
    collegeRollNumber,
    evenNumbers,
    oddNumbers,
    uppercaseAlphabets,
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
