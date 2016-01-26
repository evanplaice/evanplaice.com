import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

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
        <template [ngIf]="!association.url"><em>{{ association.role }}</em>, {{ association.organization }}</template>
        <template [ngIf]="association.url"><em>{{ association.role }}</em>, <a href="{{ association.url}}">{{ association.organization }}</a></template>
      </h3>
      <duration [start]="association.start" [end]="association.end"></duration>
      <summary>{{ association.summary }}</summary>
      <highlights [highlights]="association.highlights"></highlights>
      <keywords [keywords]="association.keywords"></keywords>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class AffiliationsComponent {
  empty () {
    return Object.keys(this.affiliations).length === 0;
  }
}
