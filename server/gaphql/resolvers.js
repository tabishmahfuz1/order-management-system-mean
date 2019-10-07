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
    },
    getItem: async (_, { id }, { db }) => {
      let item = await db.items.findByPk(id);

      return item;
    },
    getItemStockDetails: async (_, { itemId }, { db }) => {
      let itemStockDetails = await db.itemStockDetail.findAll({
        where: {
          itemId
        }
      });

      return itemStockDetails;
    }
  },
  Mutation: {
  	saveItem: async (_, { item }, { db }) => {
  		let itemToSave;
      if ( 'id' in item ) {
        itemToSave = await db.items.findByPk(item.id);
        if(!itemToSave) {
          throw "Item Not Found Exception";
        }
        delete item.id;
        await itemToSave.update(item);
      } else {

        if(!('isActive' in item)) {
          item.isActive = true;
        }

        itemToSave = await db.items.create(item);

        if(item.qtyOnHand) {
          await db.itemStockDetail.create({
            date: new Date(),
            quantity: item.qtyOnHand,
            type: 'OPENING_STOCK',
            itemId: itemToSave.id
          });
        }

      }

  		return itemToSave;
  	}
  }
};

module.exports = resolvers;