exports.typeDefs = `
	type Item {
	  	id: Int!
	  	itemName: String!
	  	itemType: ItemType
	  	itemCost: Float
	  	itemPrice: Float!
	    qtyOnHand: Int
	  	isActive: Boolean
	}

	type ItemStockDetail {
	    id: Int!
	    type: String
	    date: String
	    quantity: Int!
	    remarks: String
	    itemId: Int
	}

	type ItemType {
	  	id: Int!
	  	name: String!
	  	isActive: Boolean
	}

	extend type Query {
		item(itemFilterInput: ItemFilterInput): [Item]!
	    getItem(id: Int!): Item
	    itemType(id: Int!): ItemType
	    getItemStockDetails(itemId: Int!): [ItemStockDetail]!
	}

	extend type Mutation {
	    saveItem(item: ItemInput): Item!
	    deleteItem(id: Int!): Boolean
	}


	input ItemInput {
	    id: Int
	    itemName: String!
	    itemCost: Float
	    itemPrice: Float!
	    isActive: Boolean
	    qtyOnHand: Int
	}

  	input ItemFilterInput {
	    id: Int
	    itemName: String
	    isActive: Boolean
	}

`;

exports.resolvers = {
  Query: {
    item: async (_, { itemFilterInput }, { user, db }) => {
      if (!user) throw new Error("Unauthorized");
    	let filters = itemFilterInput
    					? { where: itemFilterInput }
    					: {}; 
    	let items = await db.items.findAll(filters);

    	return items;
    },
    getItem: async (_, { id }, { user, db }) => {
      if (!user) throw new Error("Unauthorized");
      let item = await db.items.findByPk(id);

      return item;
    },
    getItemStockDetails: async (_, { itemId }, { user, db }) => {
      if (!user) throw new Error("Unauthorized");
      let itemStockDetails = await db.itemStockDetail.findAll({
        where: {
          itemId
        }
      });

      return itemStockDetails;
    }
  },
  Mutation: {
  	saveItem: async (_, { item }, { user, db }) => {
      if (!user) throw new Error("Unauthorized");
  		let itemToSave;
      if ( item.id ) {
        itemToSave = await db.items.findByPk(item.id);
        if(!itemToSave) {
          throw "Item Not Found Exception";
        }
        delete item.id;
        delete item.qtyOnHand;
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