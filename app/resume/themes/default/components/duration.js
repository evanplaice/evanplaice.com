import { Component, View } from 'angular2/core';

@Component({
  selector: 'duration',
  inputs: [ 'start', 'end' ]
})
@View({
  template: `
  <span *ngIf="start && end" class="tenure">{{ start }} - {{ end }}</span>
  <span *ngIf="start && !end" class="tenure">{{ start }}</span>
  `
})
export class DurationComponent {}
