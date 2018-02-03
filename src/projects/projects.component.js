import { Component, Inject } from '@angular/core';
import { ProjectsService } from './projects.service';
import template from './projects.component.html';

@Component({
  selector: 'projects',
  injectables: [ ProjectsService ],
  template: template
})
export class ProjectsComponent {
  constructor (@Inject(ProjectsService) projectsService) {
    // link to the projects data
    projectsService.projects$.subscribe(update => this.projects = update);
    projectsService.getProjects();
  }
}
