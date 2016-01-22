import { Component, View } from 'angular2/core';

@Component({
  selector: 'header',
  inputs: [ 'title' ]
})
@View({
  template: `
    <ng-content></ng-content>
    <template [ngIf]="title"><h2>{{ title }}</h2></template>
  `
})
export class HeaderComponent {}
