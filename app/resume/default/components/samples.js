import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'samples',
  inputs: [ 'samples' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="samples">
    <header title="Samples"><span class="fa fa-lg fa-share"></span></header>
    <div *ngFor="#sample of samples">
      <h3 *ngIf="sample.title">
        <a *ngIf="sample.url" href="{{ sample.url }}">{{ sample.title }}</a>
        <template [ngIf]="!sample.url">{{ role.title }}</template>
      </h3>
      <duration [start]="sample.date"></duration>
      <p>{{ sample.summary }}</p>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class SamplesComponent {
  empty () {
    return this.samples.length === 0;
  }
}
