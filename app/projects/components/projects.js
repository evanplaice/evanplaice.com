import { Component, View, Inject } from 'angular2/core';
import { ProjectComponent } from 'app/projects/components/project';
import { ProjectService } from 'app/projects/services/project';

@Component({
  selector: 'projects',
  injectables: [ ProjectService ]
})
@View({
  templateUrl: 'app/projects/components/projects.html',
  directives: [ ProjectComponent ]
})
export class ProjectsComponent {
  constructor (@Inject(ProjectService) projectService) {
    // console.log('projects');

    // observable provided by ProjectService
    projectService.projects$.subscribe(update => this.projects = update);
    projectService.getProjects();
  }
}
