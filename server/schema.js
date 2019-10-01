const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    item(itemFilterInput: ItemFilterInput!): [Item]!
    itemType(id: Int!): ItemType
  }

  type Item {
  	id: Int!
  	itemName: String!
  	itemType: ItemType
  	itemCost: Float
  	itemPrice: Float!
    qtyOnHand: Int
  	isActive: Boolean
  }

  type ItemType {
  	id: Int!
  	name: String!
  	isActive: Boolean
  }

  type Mutation {
    createItem(item: ItemInput): Item!
    updateItem(item: ItemInput!): Item!
    deleteItem(id: Int!): Boolean
  }

  input ItemInput {
    id: Int
    itemName: String!
    itemCost: Float
    itemPrice: Float!
    isActive: Boolean
  }

  input ItemFilterInput {
    id: Int
    itemName: String
    isActive: Boolean
  }

`;

module.exports = typeDefs;
