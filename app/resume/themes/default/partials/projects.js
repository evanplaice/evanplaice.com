import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'projects',
  inputs: [ 'projects' ]
})
@View({
  template: `
  <hr>
  <section id="projects">
    <header title="Projects"><span class="fa fa-lg fa-star"></span></header>
    <div *ngFor="#project of projects | derp">
      <h3 *ngIf="project.role"><em>{{ project.role }}</em>,
        <a *ngIf="project.url" href="{{ project.url }}">{{ project.title }}</a>
        <template [ngIf]="!project.url">{{ project.title }}</template>
      </h3>
      <p>{{ project.summary }}<p>
      <highlights [highlights]="project.highlights"></highlights>
      <keywords [keywords]="project.keywords"></keywords>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class ProjectsComponent {}
