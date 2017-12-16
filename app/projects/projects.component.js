import { Component, Inject } from '@angular/core';
import { ProjectsService } from 'app/projects/projects.service';

@Component({
  selector: 'projects',
  injectables: [ ProjectsService ],
  templateUrl: 'app/projects/projects.component.html'
})
export class ProjectsComponent {
  constructor (@Inject(ProjectsService) projectsService) {
    // link to the projects data
    projectsService.projects$.subscribe(update => this.projects = update);
    projectsService.getProjects();
  }
}
