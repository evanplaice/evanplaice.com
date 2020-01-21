import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects;

  constructor (private projectsService: ProjectsService) {
    // link to the projects data
    projectsService.projects$.subscribe(update => this.projects = update);
    projectsService.getProjects();
  }
}
