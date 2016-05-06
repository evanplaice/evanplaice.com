import { Component, View, Inject } from 'angular2/core';
import { ProjectComponent } from 'app/projects/project.component';
import { ProjectsService } from 'app/projects/projects.service';

@Component({
  selector: 'projects',
  injectables: [ ProjectsService ],
  templateUrl: 'app/projects/projects.component.html',
  directives: [ ProjectComponent ]
})
export class ProjectsComponent {
  constructor (@Inject(ProjectsService) projectsService) {
    // console.log('projects');
    // link to the projects data
    projectsService.projects$.subscribe(update => this.projects = update);
    projectsService.getProjects();
  }
}
