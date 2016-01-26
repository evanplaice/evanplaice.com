import { Component, View } from 'angular2/core';

@Component({
  selector: 'duration',
  inputs: [ 'start', 'end' ]
})
@View({
  template: `
  <template [ngIf]="start">
  <span *ngIf="start && !end" class="tenure">{{ start }}</span>
  <span *ngIf="start && end" class="tenure">{{ start }} - {{ end }}</span>
  </template>
  `
})
export class DurationComponent {}
