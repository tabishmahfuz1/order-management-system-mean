import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo, APOLLO_OPTIONS  } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ComponentsModule } from './components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { ApolloLink, concat } from 'apollo-link';
import { HttpHeaders } from '@angular/common/http';

import {
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      const http = httpLink.create({ uri: 'http://localhost:3000/graphql' });

      const authMiddleware = new ApolloLink((operation, forward) => {
        // add the authorization to the headers
        let token = localStorage.getItem('token') || null;
        operation.setContext({
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
        });

        return forward(operation);
      });
      return {
        cache: new InMemoryCache({
          addTypename: false
        }),
        link: concat(authMiddleware, http)
      }
    },
    deps: [HttpLink]
  },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  /*constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({uri: 'http:localhost:3000/graphql'}),
      cache: new InMemoryCache()
    });
  }*/
}
