import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'projects',
  inputs: [ 'projects' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="projects">
    <header title="Projects"><span class="fa fa-lg fa-star"></span></header>
    <div *ngFor="#project of projects">
      <h3 *ngIf="project.role"><em>{{ project.role }}</em>,
        <template [ngIf]="project.url"><a href="{{ project.url }}">{{ project.title }}</a></template>
        <template [ngIf]="!project.url">{{ project.title }}</template>
      </h3>
      <duration [start]="project.start" [end]="project.end"></duration>
      <p>{{ project.summary }}<p>
      <highlights [highlights]="project.highlights"></highlights>
      <keywords [keywords]="project.keywords"></keywords>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ProjectsComponent {
  empty () {
    return Object.keys(this.projects).length === 0;
  }
}
