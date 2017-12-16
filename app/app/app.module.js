import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';

// directives & pipes
import { AppComponent } from './app.component';

// providers & services

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
