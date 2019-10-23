const dotenv 				= require('dotenv');
dotenv.config();
const app					= require('./app');
const graphQlServer 		= require('./app/graphql');
const config 				= require('./config')[process.env.NODE_ENV || 'development'];
const secret 				= process.env.SECRET || 'ABC123';

app.set('secret', secret);

graphQlServer.applyMiddleware({ app });

try {
	app.listen({ port: config.port }, () =>
	  console.log(`🚀 API Server ready at http://localhost:${config.port}`) //${server.graphqlPath}
	);
} catch(err) {
	console.error(err);
}
