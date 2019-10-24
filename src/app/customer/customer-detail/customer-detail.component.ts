import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Customer, State } from '../../types';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

	id:  number;
	isNewCustomer: boolean = true;
	customer: Customer = {
  		id: null,
  		name: '',
  		address: '',
  		city: '',
  		stateId: 0,
  		state: {
  			id: 0,
  			name: ''
  		},
  		discount: 0,
  		status: true
  	};

  	states$: Observable<State[]>;


  	constructor(
  		private route: ActivatedRoute, 
		private customerService: CustomerService, 
		private _snackBar: MatSnackBar,
    	public router: Router) { 

  		route.params.subscribe((p) => {
	  		this.id = parseInt(p.id);
	  		this.customer.id = this.id;
	  	});

  		if(this.id) {
        	this.fetchCustomer();
  		}

  		this.states$ = this.customerService.getStates();

  	}

  	ngOnInit() {
  	}


  	fetchCustomer() {
  		this.isNewCustomer = false;
  		this.customerService
	  		.getCustomer(this.id)
	  		.subscribe(
	  				customer => this.customer = customer
	  			);
  	}


  	saveCustomer() {
  		this.customerService
  			.saveCustomer(this.customer)
  			.subscribe(
  				customer => {
  					this.customer = customer;
  					this._snackBar.open("Customer Updated",'',{
		  			  	duration: 3000
		  			});
		  			if(this.isNewCustomer) {
			          	this.router.navigate(['/customers/' + this.customer.id]);
			        }
  				}
  			);
  	}

}
