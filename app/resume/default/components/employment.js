import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

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
        <summary>{{ job.summary }}</summary>
        <highlights [highlights]="job.highlights"></highlights>
        <keywords [keywords]="job.keywords"></keywords>
      </div>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class EmploymentComponent {
  empty () {
    // has history
    if (this.employment.history && Object.keys(this.employment.history).length !== 0) {
      return false;
    }
    return true
  }
}
