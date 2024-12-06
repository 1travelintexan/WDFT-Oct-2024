const jwt = require("jsonwebtoken");

//the function that finds the token and verifies it
function isAuthenticated(req, res, next) {
  try {
    //first check if there is a key named authorization in the headers,
    //if the first word in authorization is 'Bearer'
    //if yes then create a variable that is the authToken
    if (
      req.headers.authorization.split(" ")[0] === "Bearer" &&
      req.headers.authorization.split(" ")[1]
    ) {
      const theToken = req.headers.authorization.split(" ")[1];
      const payLoad = jwt.verify(theToken, process.env.TOKEN_SECRET);
      console.log("here is the payload", payLoad);
      //create a property on the request that is name vurrentUser that has our information
      req.payload = { currentUser: payLoad };
      //after attaching the payload to the request, call the next method to pass to the next function
      next();
    } else {
      res.status(403).json({ message: "no token present" });
    }
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = { isAuthenticated };
