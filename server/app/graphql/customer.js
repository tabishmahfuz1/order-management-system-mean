exports.typeDefs = `
	type Customer {
		id: Int
		name: String
		address: String
		city: String
		stateId: Int
		state: State
		discount: Float
		status: Boolean
	}

	extend type Query {
		customer(customerFilterInput: CustomerFilterInput): [Customer]!
		getCustomer(id: Int!): Customer
	}

	input CustomerFilterInput {
		id: Int
		name: String
		status: Boolean
	}

	extend type Mutation {
		saveCustomer(customer: CustomerInput!): Customer
	}

	input CustomerInput {
		id: Int
		name: String
		address: String
		city: String
		stateId: Int
		state: String
		discount: Float
		status: Boolean
	}

`;

exports.resolvers = {
	Query: {
		customer: async (_, { customerFilterInput }, { user, db }) => {
	      if (!user) throw new Error("Unauthorized");
	    	let filters = customerFilterInput
	    					? { where: customerFilterInput }
	    					: {}; 
	    	let customers = await db.customer.findAll(filters);

	    	return customers;
	    },
	    getCustomer: async (_, { id }, { user, db }) => {
	      if (!user) throw new Error("Unauthorized");
	      let customer = await db.customer.findByPk(id);

	      return customer;
	    },
	},
	Mutation: {
		saveCustomer: async (_, { customer }, { user, db }) => {
	      if (!user) throw new Error("Unauthorized");
	  		let customerToSave;
	      if ( customer.id ) {
	        customerToSave = await db.customer.findByPk(customer.id);
	        if(!customerToSave) {
	          throw "Item Not Found Exception";
	        }
	        delete customer.id;
	        await customerToSave.update(customer);
	      } else {

	        if(!('status' in customer)) {
	          customer.status = true;
	        }

	        if(!customer.stateId && customer.state) {
	          let state = await db.state.findOne({
	          	where: {
	          		name: customer.state
	          	}, /*raw: true*/
	          });

	          if(state) {
	          	console.log(state)
	          	customer.stateId = state.id;
	          }
	        }

	        customerToSave = await db.customer.create(customer);	        

	      }

	  		return customerToSave;
	  	}
	},
	Customer: {
		state: async (customer) => {
			return customer.getState();
		}
	}
}