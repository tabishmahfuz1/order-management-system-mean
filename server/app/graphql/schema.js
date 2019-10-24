const { gql, makeExecutableSchema  }   = require('apollo-server-express');
 
const item      = require('./itemschema');
const customer  = require('./customer');
const state  	= require('./state');
const { merge } = require('lodash');

let Query = `
  type Query {
    hello: String!
  }

  type Mutation {
    _: String!
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [ Query, item.typeDefs, customer.typeDefs, state.typeDefs ],
  resolvers: merge(item.resolvers, customer.resolvers, state.resolvers),
});
