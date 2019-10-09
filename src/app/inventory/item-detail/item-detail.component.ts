import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Item, ItemStockDetail } from '../../types';
import { ItemService } from './../item.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {
	id:  number;
  stockDetails: ItemStockDetail[];
  isNewItem: boolean = true;
  displayedColumns: string[] = ['type', 'quantity', 'remarks'];

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
      this.fetchItem();
		}
	  	
	}

  	ngOnInit() {
  	}

    /**
    * Fetch and update Item Details
    */
    fetchItem() {
      this.isNewItem = false;
      this.itemService.getItem(this.id)
          .subscribe(item => this.item = item);
      this.fetchItemStockDetails();
    }

    /**
    * Fetch and update Item Stock Details
    */
    fetchItemStockDetails() {
      this.itemService.getItemStockDetails(this.id)
          .subscribe(stockDetails => {
            this.stockDetails = stockDetails; 
            console.log(this.stockDetails)
          });  
    }

    /**
    * Save the Item to the Server
    */
  	saveItem(e) {
  		this.itemService.saveItem(this.item)
  		.subscribe((savedItem) => {
  			this.item = savedItem;
  			this._snackBar.open("Item Saved", '',{
  			  duration: 3000
  			});

        if(this.isNewItem) {
          this.isNewItem = false;
          this.fetchItemStockDetails();
        }
  			// console.log('Item Saved', savedItem);
  		});
  	}

}
