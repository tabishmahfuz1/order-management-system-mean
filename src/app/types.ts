export type Item = {
	id: number;
  	itemName: string;
  	itemCost: number;
  	itemPrice: number;
    qtyOnHand: number;
  	isActive: boolean;
}

export type Query = {
	items: Item[];
}