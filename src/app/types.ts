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
    qtyOnHand: number;
}

export type ItemStockDetail = {
  id: number;
  type: string;
  quantity: number;
  remarks: string;
}

export type Query = {
	item: Item[];
  getItem: Item;
	getItemStockDetails: ItemStockDetail[];
}

export type Mutation = {
	saveItem: Item;
}