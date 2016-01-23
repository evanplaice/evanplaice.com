import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'employment',
  inputs: [ 'employment' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="employment">
    <header title="Employment"><span class="fa fa-lg fa-building"></span></header>
    <div *ngFor="#job of employment.history">
      <div>
        <h3><em>{{ job.position }}</em>,
          <template [ngIf]="job.url"><a href="{{ job.url }}">{{ job.employer }}</a></template>
          <template [ngIf]="!job.url">{{ job.employer }}</template>
        </h3>
        <duration [start]="job.start" [end]="job.end"></duration>
        <p>{{ job.summary }}</p>
        <highlights [highlights]="job.highlights"></highlights>
        <keywords [keywords]="job.keywords"></keywords>
      </div>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class EmploymentComponent {
  empty () {
    return Object.keys(this.employment).length === 0;
  }
}
