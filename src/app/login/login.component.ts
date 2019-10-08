import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loading = false;
    submitted = false;
    returnUrl: string;
	loginForm;
  	
  	constructor(private formBuilder: FormBuilder,
  				private authService: AuthService,
  				private router: Router,
  				private route: ActivatedRoute) { 
  	}

  	ngOnInit() {
  		this.loginForm = this.formBuilder.group({
  			email: ['', Validators.required],
  			password: ['', Validators.required]
  		});
  		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  	}

  	doLogin() {
  		console.log(this.loginForm.value);

  		if (this.loginForm.invalid) {
            return;
        }

  		this.authService
  			.login(this.loginForm.value)
  			.pipe(first())
  			.subscribe(res => {
  				console.log(res);
  				this.router.navigate([this.returnUrl]);
  			});
  	}

}
