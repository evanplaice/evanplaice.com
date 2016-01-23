import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'governance',
  inputs: [ 'governance' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="governance">
    <header title="Governance"></header>
    <div *ngFor="#position of governance">
      <h3>
        <template [ngIf]="position.role"><em>{{ position.role }}</em> </template>
        <template [ngIf]="position.organization">{{ position.organization }}</template>
      </h3>
    </div>
    <!--<duration [start]="position.start" [end]="position.end"></duration>-->
    <!--<highlights [highlights]="position.highlights"></highlights>-->
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class GovernanceComponent {
  empty () {
    return this.governance.length === 0;
  }
}