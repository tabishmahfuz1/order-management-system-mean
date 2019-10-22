const { ApolloServer, gql } = require('apollo-server-express');
const db 					= require('../models');
const schema 				= require('./schema');
// const resolvers 			= require('./resolvers');
const getUser 				= require('../utils').getUserByToken;


const context = ({ req }) => {
	let user = getUser(req.headers.authorization);

	return { user, db };
}

module.exports = new ApolloServer({ 
					schema,
					context
				});