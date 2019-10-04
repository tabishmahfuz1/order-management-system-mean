import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Item, Query, ItemInput, Mutation } from '../../types';

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
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
	id:  number;

  	item: Item = {
  		id: null,
  		itemName: '',
  		itemCost: 0,
  		itemPrice: 0,
  		qtyOnHand: 0,
  		isActive: true
  	};

	constructor(route: ActivatedRoute, private apollo: Apollo) { 
	  	route.params.subscribe((p) => {
	  		this.id = parseInt(p.id);
	  		this.item.id = this.id;
	  	});
		if(this.id) {
			this.apollo.watchQuery<Query>({
	    		query: getItemQuery,
	    		variables: { id: this.id }
		    })
	      	.valueChanges
	      	.subscribe(item => {
	      		this.item = item.data.getItem;
		    });
		}
	  	
	}

  	ngOnInit() {
  	}

  	saveItem(e) {
  		let itemInput = this.item;
  		console.log('Item Saved', itemInput);

  		delete itemInput.qtyOnHand;

  		this.apollo.mutate<Mutation>({
  			mutation: saveItemMutation,
  			variables: { item: itemInput }
  		}).subscribe((data) => {
  			this.item = data.data.saveItem;
  			console.log('Item Saved', data);
  		});
  	}

}
