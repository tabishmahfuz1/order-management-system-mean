import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
	customers$: Observable<Customer[]>;
  	constructor(private customerService: CustomerService) { }

  	ngOnInit() {
  		this.customers$ = this.customerService.getCustomers();
  	}

}
