import {
  Component,
  View,
  Inject
} from 'angular2/core';
import {
  ProjectComponent
} from 'app/components/project/project';
import {
  ProjectService
} from 'app/services/project';

@Component({
  selector: 'projects',
  injectables: [
    ProjectService
  ]
})
@View({
  templateUrl: 'app/components/projects/projects.html',
  directives: [
    ProjectComponent
  ]
})
export class ProjectsComponent {
  constructor (@Inject(ProjectService) projectService) {
    console.log('projects');

    // fetch the design data
    this.projects = projectService.getProjects();
  }
}
