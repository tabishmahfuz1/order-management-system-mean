exports.typeDefs = `
	type State {
		id: Int
		name: String
	}

	extend type Query {
		state(stateFilterInput: StateInput): [State]!
		getState(id: Int!): State
	}

	input StateInput {
		id: Int
		name: String
	}

`;

exports.resolvers = {
	Query: {
		state: async (_, { stateFilterInput }, { user, db }) => {
	      if (!user) throw new Error("Unauthorized");
	    	let filters = stateFilterInput
	    					? { where: stateFilterInput }
	    					: {}; 
	    	let states = await db.state.findAll(filters);

	    	return states;
	    },
	    getState: async (_, { id }, { user, db }) => {
	      if (!user) throw new Error("Unauthorized");
	      let state = await db.state.findByPk(id);

	      return state;
	    },
	},
	Mutation: {
		
	}
}