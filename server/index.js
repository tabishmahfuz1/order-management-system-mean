const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs 				= require('./gaphql/schema');
const resolvers 			= require('./gaphql/resolvers');
const dotenv 				= require('dotenv');
dotenv.config();
const config 				= require('./config')[process.env.NODE_ENV || 'development'];
const app					= require('./app');
const db 					= require('./models');

const secret 				= process.env.SECRET || 'ABC123';

app.set('secret', secret);

const context = (req) => {
	const auth = (req.headers && req.headers.authorization) || '';
  	const authDecoded = new Buffer(auth, 'base64').toString('ascii').split('|');

}

const server 				= new ApolloServer({ 
								typeDefs, 
								resolvers,
								db,
								context
							});

// console.dir(db)

server.applyMiddleware({ app });

app.listen({ port: config.port }, () =>
  console.log(`🚀 API Server ready at http://localhost:${config.port}`) //${server.graphqlPath}
);