const { gql } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

let typeDefs = `

	type Query {
    	hello: String
    }

    type Mutation {
    	_: String
    }

`;

let types = fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-7) === '.schema');
  })
  .reduce((acc, file) => acc + `\n` + fs.readFileSync(path.join(__dirname, file), "utf8"), ``);

typeDefs = gql`${typeDefs}\n${types}`;


module.exports = typeDefs;