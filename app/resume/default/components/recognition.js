import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'recognition',
  inputs: [ 'recognition' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="recognition">
    <header title="Recognition"><span class="fa fa-lg fa-trophy"></span></header>
    <div *ngFor="#award of recognition">
      <h3>
        <span *ngIf="award.from">{{ award.title }}, {{ award.from }}</span>
        <template [ngIf]="!award.from">{{ award.title }}</template>
      </h3>
      <duration [start]="award.date"></duration>
      <p>{{ award.summary }}</p>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class RecognitionComponent {
  empty () {
    return this.recognition.length === 0;
  }
}
