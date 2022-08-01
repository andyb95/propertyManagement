const express = require("express");
const app = express();
const cors = require("cors");
const session = require('express-session')
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;
const db = require("./db/conn");
app.use(express.json());
app.use(cors());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 31},
    secret: process.env.SESSION_SECRET
  })
)

app.use(require("./routes/user"));
// app.use(require("./routes/property"));
app.use(require("./routes/message"));
// app.use(require("./routes/document"));

app.listen(port, () => {
  // perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });

  console.log(`Server is running on port: ${port}`);
});
