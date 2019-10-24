import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Item, Query, ItemInput, Mutation, ItemStockDetail } from '../types';

const getItemQuery = gql`
			        query getItem($id: Int!) {
			          getItem(id: $id) {
			            id
			            itemName
			            itemPrice
			            itemCost
			            isActive
			            qtyOnHand
			          }
			        }
			      `;

const saveItemMutation = gql`
		        mutation saveItem($item: ItemInput) {
		          saveItem(item: $item) {
		            id
		            itemName
		            itemPrice
		            itemCost
		            isActive
		            qtyOnHand
		          }
		        }
		      `;

const getItemsQuery = gql`
		        query item {
		          item {
		            id
		            itemName
		            itemPrice
		            itemCost
		            isActive
		            qtyOnHand
		          }
		        }
		      `;

const getItemStockDetails = gql`
		        query getItemStockDetails($id: Int!) {
		          getItemStockDetails(itemId: $id) {
		            id
		            type
				    date
				    quantity
				    remarks
				    itemId
		          }
		        }
		      `;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private apollo: Apollo) { }

  getItems(): Observable<Item[]> {
  		return this.apollo.watchQuery<Query>({
	      query: getItemsQuery
	    })
	      .valueChanges
	      .pipe(
	        map(result => result.data.item)
	      );
  }

  getItemStockDetails(id: number): Observable<ItemStockDetail[]> {
  		return this.apollo.watchQuery<Query>({
	      query: getItemStockDetails,
	      variables: { id }
	    })
	      .valueChanges
	      .pipe(
	        map(result => result.data.getItemStockDetails)
	      );
  }

  getItem(id: number): Observable<Item> {
  	return this.apollo.watchQuery<Query>({
		query: getItemQuery,
		variables: { id }
    })
  	.valueChanges
    .pipe(
    	map(result => result.data.getItem)
    );
  }

  saveItem(item: Item): Observable<Item> {
  	let itemInput = item;

  	return this.apollo.mutate<Mutation>({
  			mutation: saveItemMutation,
  			variables: { item: itemInput },
  			refetchQueries: [{
		        query: getItemsQuery,
		        variables: { repoFullName: 'apollographql/apollo-client' },
		    }],
  		})
  		.pipe(
  			map(result => result.data.saveItem)
  		);
  }
}
