import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Item, Query } from '../types';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  constructor(private apollo: Apollo) { }

  ngOnInit() {
  	// this.items = 
  	this.apollo.watchQuery<Query>({
      query: gql`
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
      `
    })
      .valueChanges
      /*.pipe(
        map(result => result.data.item)
      )*/.subscribe(itemList => {
      	// console.log(itemList.data.item);
      	this.items = itemList.data.item;
      	// console.log(itemList)
      });
  }

}
