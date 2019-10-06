import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Item } from '../../types';
import { ItemService } from './../item.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

	constructor(
		private route: ActivatedRoute, 
		private itemService: ItemService, 
		private _snackBar: MatSnackBar) { 
	  	route.params.subscribe((p) => {
	  		this.id = parseInt(p.id);
	  		this.item.id = this.id;
	  	});
		if(this.id) {
			this.itemService.getItem(this.id)
	      	.subscribe(item => this.item = item);
		}
	  	
	}

  	ngOnInit() {
  	}

  	saveItem(e) {
  		this.itemService.saveItem(this.item)
  		.subscribe((savedItem) => {
  			this.item = savedItem;
  			this._snackBar.open("Item Saved", '',{
			  duration: 3000
			});
  			// console.log('Item Saved', savedItem);
  		});
  	}

}
