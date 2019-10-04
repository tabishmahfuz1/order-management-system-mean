const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs 				= require('./schema');
const resolvers 			= require('./resolvers');
const dotenv 				= require('dotenv');
dotenv.config();
const config 				= require('./config')[process.env.NODE_ENV || 'development'];
const app					= require('./app');
const db 					= require('./models');
const server 				= new ApolloServer({ typeDefs, resolvers, context: { db } });

server.applyMiddleware({ app });

app.listen({ port: config.port }, () =>
  console.log(`🚀 API Server ready at http://localhost:${config.port}`) //${server.graphqlPath}
);