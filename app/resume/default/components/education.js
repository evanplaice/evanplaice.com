import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

import 'font-awesome/css/font-awesome.min.css!css';

@Component({
  selector: 'education',
  inputs: [ 'education' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="education">
    <header title="Education"><span class="fa fa-lg fa-mortar-board"></span></header>
    <div *ngFor="#school of education.history">
      <h3>
        <template [ngIf]="school.title"><em>{{ school.title }}</em>, </template>{{ school.institution }}
      </h3>
      <duration [start]="school.start" [end]="school.end"></duration>
      <summary>{{ school.summary }}</summary>
      <curriculum [curriculum]="school.curriculum"></curriculum>
      <highlights [highlights]="school.highlights"></highlights>
      <keywords [keywords]="school.keywords"></keywords>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class EducationComponent {
  empty () {
    return Object.keys(this.education).length === 0;
  }
}
