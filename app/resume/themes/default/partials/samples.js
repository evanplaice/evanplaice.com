import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'samples',
  inputs: [ 'samples' ]
})
@View({
  template: `
  <hr>
  <section id="samples">
    <header title="Samples"><span class="fa fa-lg fa-share"></span></header>
    <div *ngFor="#sample of samples | derp">
      <h3 *ngIf="sample.title">
        <a *ngIf="sample.url" href="{{ sample.url }}">{{ sample.title }}</a>
        <template [ngIf]="!sample.url">{{ role.title }}</template>
      </h3>
      <duration [start]="sample.date"></duration>
      <p>{{ sample.summary }}</p>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class SamplesComponent {}
