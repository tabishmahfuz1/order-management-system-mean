import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer, Query, Mutation, State } from '../types';

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
}
