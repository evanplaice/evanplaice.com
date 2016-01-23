import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'about',
  inputs: [ 'name', 'info', 'contact' ]
})
@View({
  template: `
  <header>
  <h1 *ngIf="name">{{ name | nolast }} <span style="color: #C00000;">{{ name | last }}</span></h1>
  <span class="label">{{ info.label }}</span>
  <p id="contact">
    <span *ngIf="contact.email" class="email"><a href="mailto:{{ contact.email }}">{{ contact.email }}</a></span>
    <span *ngIf="contact.phone" class="phone">{{ contact.phone }}</span>
    <span *ngIf="contact.website" class="website"><a href="{{ contact.website }}">{{ contact.website }}</a></span>
  </p>
  </header>
  `,
  pipes: [ TEMPLATE_PIPES ]
})
export class AboutComponent {}
