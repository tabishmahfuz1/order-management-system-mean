const jwt  = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    let result = validateToken(authorizationHeaader, req.app.get('secret'));

    if(result.error) {
      res.status(result.status).json(result);
    } else {
      console.log("This is the GREAT Middleware");
      req.user = result.user;
      next();
    }
}

var validateToken = (authorizationHeaader, secret) => {
    let result;
    if (authorizationHeaader) {
      const token = authorizationHeaader.split(' ')[1]; // Bearer <token>
      const options = {
        expiresIn: 1440
      };
      try {
        result = jwt.verify(token, secret, options);

        // console.trace({ result })
        // next();
        result = {
          success: true,
          user: result
        }
      } catch (err) {
        console.error(err)
        // throw new Error(err);
        result = { 
          error: `Authentication error. Invalid Token.`,
          success: false,
          status: 401
        };
        // res.status(401).json(result);
      }
    } else {
      result = { 
        error: `Authentication error. Token required.`,
        success: false,
        status: 401 
      };
      // res.status(401).json(result);
    }

    return result;
}

module.exports.validateToken = validateToken;