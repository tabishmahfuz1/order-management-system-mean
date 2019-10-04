export type Item = {
	id: number;
  	itemName: string;
  	itemCost: number;
  	itemPrice: number;
    qtyOnHand: number;
  	isActive: boolean;
}

export type ItemInput = {
	id: number;
  	itemName: string;
  	itemCost: number;
  	itemPrice: number;
  	isActive: boolean;
}

export type Query = {
	item: Item[];
	getItem: Item;
}

export type Mutation = {
	saveItem: Item;
}