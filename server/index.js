const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs 				= require('./gaphql/schema');
const resolvers 			= require('./gaphql/resolvers');
const dotenv 				= require('dotenv');
dotenv.config();
const config 				= require('./config')[process.env.NODE_ENV || 'development'];
const app					= require('./app');
const db 					= require('./models');
const validateToken 		= require('./tokenValidator').validateToken;
const secret 				= process.env.SECRET || 'ABC123';

app.set('secret', secret);

let getUser = token => {
	let result = validateToken(token, secret);
	if(result.error) {
		return null;
	}
	return result.user;
}

const context = ({ req }) => {
	let user = getUser(req.headers.authorization);

	return { user, db };
}

const server 				= new ApolloServer({ 
								typeDefs, 
								resolvers,
								context
							});

// console.dir(db)

server.applyMiddleware({ app });
try {
	app.listen({ port: config.port }, () =>
	  console.log(`🚀 API Server ready at http://localhost:${config.port}`) //${server.graphqlPath}
	);
} catch(err) {
	console.error(err);
}
