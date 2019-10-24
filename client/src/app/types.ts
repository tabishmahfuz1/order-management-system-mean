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


export type Customer = {
  id: number;
  name: string;
  address: string;
  city: string;
  stateId: number;
  state: State;
  discount: number;
  status: boolean;
}

export type CustomerInput = {
  id: number;
  name: string;
  address: string;
  city: string;
  stateId: number;
  state: string;
  discount: number;
  status: boolean;
}

export type State = {
  id: number;
  name: string;
}

export type Query = {
  item: Item[];
  customer: Customer[];
  state: State[];
	getCustomer: Customer;
  getItem: Item;
	getItemStockDetails: ItemStockDetail[];
}

export type Mutation = {
  saveItem: Item;
	saveCustomer: Customer;
}