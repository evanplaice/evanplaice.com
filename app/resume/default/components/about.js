import { Component, View } from 'angular2/core';

@Component({
  selector: 'about',
  inputs: [ 'name', 'contact' ]
})
@View({
  template: `
  <header>
    <h1 *ngIf="name">{{ name }}</h1>
    <div id="contact">
      <div *ngIf="contact.email" class="email"><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></div>
      <div *ngIf="contact.phone" class="phone">{{ contact.phone }}</div>
      <div *ngIf="contact.website" class="website"><a href="{{ contact.website }}">{{ contact.website }}</a></div>
    </div>
  </header>
  `
})
export class AboutComponent {}
