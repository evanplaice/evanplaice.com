import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'service',
  inputs: [ 'service' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="service">
    <header title="Service"><span class="fa fa-lg fa-child"></span></header>
    <div *ngFor="#role of service.history">
      <h3 *ngIf="role.organization"><em>{{ role.position }}</em>,
        <template [ngIf]="role.organization && !role.url">{{ role.organization }}</template>
        <template [ngIf]="role.organization && role.url"><a href="{{ role.url }}">{{ role.organization }}</a></template>
      </h3>
      <duration [start]="role.start" [end]="role.end"></duration>
      <p>{{ role.summary }}</p>
      <highlights [highlights]="role.highlights"></highlights>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ServiceComponent {
  empty () {
    return Object.keys(this.service).length === 0;
  }
}
