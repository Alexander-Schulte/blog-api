require("dotenv").config();
const express = require("express");
const db = require("./lib/db");
const mongoose = require("mongoose");

/*
  We create an express app calling
  the express function.
*/
const app = express();

/*
  We setup middleware to:
  - parse the body of the request to json for us
  https://expressjs.com/en/guide/using-middleware.html
*/
app.use(express.json());

/*
  Endpoint to handle GET requests to the root URI "/"
*/
app.get("/", (req, res) => {
  res.json({
    "/posts": "read and create new posts",
    "/posts/:id": "read, update and delete an individual post",
  });
});

/*
  We have to start the server. We make it listen on the port 4000

*/

const { PORT } = process.env;

mongodb.on("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on port${PORT}`);
  });
});
