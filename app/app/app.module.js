import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';

// directives & pipes
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppComponent } from './app.component';

// providers & services

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ROUTER_DIRECTIVES,
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
