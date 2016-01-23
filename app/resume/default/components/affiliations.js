import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'affiliations',
  inputs: [ 'affiliations' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="affiliations">
    <header title="Affiliations"><span class="fa fa-lg fa-share-alt"></span></header>
    <div *ngFor="#association of affiliations.history">
      <h3>
        <em>{{ association.role }}</em>
        <template [ngIf]="!association.url">{{ association.organization }}</template>
        <template [ngIf]="association.url"><a href="{{ association.url}}">{{ association.organization }}</a></template>
      </h3>
      <duration [start]="association.start" [end]="association.end"></duration>
      <p>{{ association.summary }}</p>
      <highlights [highlights]="association.highlights"></highlights>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class AffiliationsComponent {
  empty () {
    return Object.keys(this.affiliations).length === 0;
  }
}
