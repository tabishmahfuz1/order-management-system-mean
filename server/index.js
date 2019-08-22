const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs 				= require('./schema');
const resolvers 			= require('./resolvers');
const config 				= require('./config')['development'];
const app					= require('./app');
const server 				= new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: config.port }, () =>
  console.log(`🚀 API Server ready at http://localhost:${config.port}`) //${server.graphqlPath}
);