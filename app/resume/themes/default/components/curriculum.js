import { Component, View } from 'angular2/core';

@Component({
  selector: 'curriculum',
  inputs: [ 'curriculum' ]
})
@View({
  template: `
  <ul *ngIf="curriculum">
    <li *ngFor="#subject of curriculum">{{ subject }}</li>
  </ul>
  `
})
export class CurriculumComponent {}
