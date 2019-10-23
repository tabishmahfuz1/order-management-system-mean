// const validateToken 		= require('./tokenValidator').validateToken;
const jwt  		= require('jsonwebtoken');
const secret 	= process.env.SECRET || 'ABC123';


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

var getUserByToken = token => {
	let result = validateToken(token, secret);
	if(result.error) {
		return null;
	}
	return result.user;
}

module.exports = {
	validateToken,
	getUserByToken
};

