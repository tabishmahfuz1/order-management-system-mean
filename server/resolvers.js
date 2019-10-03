// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world! the time is ' + new Date(),
    item: async (_, { itemFilterInput }, { db }) => {

    	let filters = itemFilterInput
    					? { where: itemFilterInput }
    					: {}; 

    	let items = await db.items.findAll(filters);

    	return items;
    }
  },
  Mutation: {
  	createItem: async (_, { item }, { db }) => {
  		if(!('isActive' in item)) {
  			item.isActive = true;
  		}

  		let createdItem = await db.items.create(item);

  		return createdItem;
  	}
  }
};

module.exports = resolvers;