import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer, Query, Mutation, State, CustomerInput } from '../types';

const getStatesQuery = gql`
	query state ($stateFilterInput: StateInput) {
		state(stateFilterInput: $stateFilterInput) {
			id,
			name
		}
	}
`;

const getCustomersQuery = gql`
	query customer ($customerInput: CustomerFilterInput) {
		customer(customerFilterInput: $customerInput) {
			id,
			name,
			address,
			city,
			state {
				name
			},
			discount,
			status
		}
	}
`;


const getCustomerQuery = gql`
	query getCustomer($id: Int!) {
		getCustomer(id: $id) {
			id,
			name,
			address,
			city,
			stateId,
			discount,
			status
		}
	}
`;

const saveCustomerMutation = gql`
	mutation saveCustomer($customer: CustomerInput!) {
		saveCustomer (customer: $customer) {
			id,
			name,
			address,
			city,
			stateId,
			discount,
			status
		}
	}
`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  	constructor(private apollo: Apollo) { }

  	getCustomers(): Observable<Customer[]> {
  		return this.apollo.watchQuery<Query>({
	      query: getCustomersQuery,
	      variables: {}
	    })
	      .valueChanges
	      .pipe(
	        map(result => result.data.customer)
	      );
  	}


  	getCustomer(id: number): Observable<Customer> {
  		return this.apollo.watchQuery<Query>({
  			query: getCustomerQuery,
  			variables: { id }
  		})
  		.valueChanges
      	.pipe(
        	map(result => result.data.getCustomer)
      	);
  	}

  	getStates(): Observable<State[]> {
  		return this.apollo.watchQuery<Query>({
  			query: getStatesQuery,
  			variables: {}
  		})
  		.valueChanges
  		.pipe(
  			map(result => result.data.state)
  		);
  	}

  	saveCustomer(customer: Customer): Observable<Customer> {
  		console.log({customer})
  		if ( customer.state ) {
  			if ( ! customer.stateId )
  				customer.stateId = customer.state.id;
  			delete customer.state;
  		}

  		return this.apollo.mutate<Mutation>({
  			mutation: saveCustomerMutation,
  			variables: { customer },
  			refetchQueries: [{
		        query: getCustomersQuery,
		        variables: { repoFullName: 'apollographql/apollo-client' },
		    }],
  		})
  		.pipe(
  			map( res => res.data.saveCustomer )
  		)
  	}
}
