const express = require("express");
const dotenv = require("dotenv");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");

require("./dbConnection.js")();
require("./redisConnection.js");

const app = express();
app.use(express.json());

dotenv.config();

app.use((req, res, next) => {
  if (req.url != "/api/auth/generateToken") {
    const token = req.header(process.env.TOKEN_HEADER_KEY);
    const decodeData = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY,
      function (err, decoded) {
        if (err && !decoded) {
          next(createError(401, err));
        }
        return decoded;
      }
    );
    req.body.userData = decodeData;
    next();
  } else {
    next();
  }
});

app.use("/api", require("./Routes/index.js"));

//404 handler and pass to error handler

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
