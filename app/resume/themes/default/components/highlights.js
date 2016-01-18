import { Component, View } from 'angular2/core';

@Component({
  selector: 'highlights',
  inputs: [ 'highlights' ]
})
@View({
  template: `
  <ul *ngIf="highlights">
    <li *ngFor="#highlight of highlights">{{ highlight }}</li>
  </ul>
  `
})
export class HighlightsComponent {}
