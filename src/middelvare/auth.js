const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  var token =
    req.body.token || req.query.token || req.headers["x-access-token"];
if(!token && req.headers.authorization){
var data  = req.headers.authorization
        var rrr = data.split(' ')
        token = rrr[1]
        console.log(token)
    
}
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    const decoded = jwt.verify(token, jwtSecretKey);

    res.status(200).send(decoded)
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports ={ verifyToken};