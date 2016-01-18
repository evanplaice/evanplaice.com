import { Component, View } from 'angular2/core';

@Component({
  selector: 'header',
  inputs: [ 'title' ]
})
@View({
  template: `
    <template [ngIf]="title"><h2>About</h2></template>
    <ng-content></ng-content>
  `
})
export class HeaderComponent {


}