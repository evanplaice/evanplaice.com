import { Component, View } from 'angular2/core';

@Component({
  selector: 'contacts',
  inputs: [ 'contacts' ]
})
@View({
  template: `
  <template [ngIf]="contacts">
    <ul *ngFor="#contact of contacts">
      <li>{{ contact.category }} - {{ contact.value }}</li>
    </ul>
  </template>
  `
})
export class ContactsComponent {}
