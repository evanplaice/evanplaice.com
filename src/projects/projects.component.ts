import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  projects: ProjectModel[];

  constructor(private projectsService: ProjectsService) {
    projectsService.projects$.subscribe(update => this.projects = update);
    projectsService.load();
  }
}
