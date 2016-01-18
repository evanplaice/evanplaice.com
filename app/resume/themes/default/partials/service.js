import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'service',
  inputs: [ 'service' ]
})
@View({
  template:  `
  <hr>
  <section id="service">
    <header title="Service"><span class="fa fa-lg fa-child"></span></header>
    <div *ngFor="#role of service.history">
      <h3 *ngIf="role.organization"><em>{{ role.organization }}</em>,
        <a *ngIf="role.url" href="{{ role.url }}">{{ role.position }}</a>
        <template [ngIf]="!role.url">{{ role.position }}</template>
      </h3>
      <duration [start]="role.start" [end]="role.end"></duration>
      <p>{{ role.summary }}</p>
      <highlights [highlights]="role.highlights"></highlights>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class ServiceComponent {}
