const { gql, makeExecutableSchema  }   = require('apollo-server-express');
 
const item      = require('./itemschema');
const customer  = require('./customer');
const { merge } = require('lodash');

let itemDefs       = item.typeDefs,
    customerDefs   = customer.typeDefs;

let Query = `
  type Query {
    hello: String!
  }

  type Mutation {
    _: String!
  }
`;

module.exports = makeExecutableSchema({
  typeDefs: [ Query, itemDefs, customerDefs ],
  resolvers: merge(item.resolvers, customer.resolvers),
});
