import { Component, View } from 'angular2/core';

@Component({
  selector: 'summary',
  inputs: [ 'summary' ]
})
@View({
  template: `
  <template [ngIf]="summary">
  <p>{{ summary }}}</p>
  </template>
  `
})
export class SummaryComponent {}
