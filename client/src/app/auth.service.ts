import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface credentials {
	email: string,
	password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  	constructor(public jwtHelper: JwtHelperService,
  				private http: HttpClient) {}
  	// ...
  	public isAuthenticated(): boolean {
    	const token = localStorage.getItem('token');
    	// Check whether the token is expired and return
    	// true or false
    	return !this.jwtHelper.isTokenExpired(token);
  	}

  	public login(credentials: credentials) {
  		return this.http.post<any>('http://localhost:3000/auth/login', 
  				credentials)
  			.pipe(
  				map(data => {
	  				let token = data.token;
	  				localStorage.setItem('currentUser', JSON.stringify(data));
	  				localStorage.setItem('token', token);
	  				return data;
	  			})
  			);
  	}

  	public logout() {
    	// remove user from local storage to log user out
    	localStorage.removeItem('token');
	  }
}
