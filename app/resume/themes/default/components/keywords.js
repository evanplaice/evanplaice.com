import { Component, View } from 'angular2/core';

@Component({
  selector: 'keywords',
  inputs: [ 'keywords' ]
})
@View({
  template:  `
  <template [ngIf]="keywords">
  <span class="keywords"><template ngFor #keyword="$implicit" [ngForOf]="keywords">{{ keyword }} </template></span>
  </template>
  `
})
export class KeywordsComponent { }