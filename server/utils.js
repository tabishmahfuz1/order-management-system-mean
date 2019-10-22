const validateToken 		= require('./tokenValidator').validateToken;
const secret 				= process.env.SECRET || 'ABC123';


module.exports = {
	getUserByToken: token => {
		let result = validateToken(token, secret);
		if(result.error) {
			return null;
		}
		return result.user;
	}
};

