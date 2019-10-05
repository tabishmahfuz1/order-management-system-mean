import { Component, OnInit } from '@angular/core';
import { Item } from '../../types';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  	this.itemService.getItems()
    .subscribe( itemList => this.items = itemList );
  }

}
