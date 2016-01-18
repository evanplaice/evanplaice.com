import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'speaking',
  inputs: [ 'speaking' ]
})
@View({
  template: `
  <hr>
  <section id="speaking">
    <header title="Speaking"><span class="fa fa-lg fa-users"></span></header>
    <div *ngFor="#talk of speaking">
      <h3><template [ngIf]="talk.title">{{ talk.title }}, </template>{{ talk.event }}</h3>
      <duration [start]="talk.date"></duration>
      <highlights [highlights]="talk.highlights"></highlights>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class SpeakingComponent {}
