const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req) => {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token && req.headers.authorization) {
    var data = req.headers.authorization
    var rrr = data.split(' ')
    token = rrr[1]
  }
  if (!token) {
    // return res.status(403).send("A token is required for authentication");
  }
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);

   return true;
  } catch (err) {
   return false;
  }
 
};

module.exports = { verifyToken };