import {
  Component,
  View
} from 'angular2/core';

@Component ({
  selector: 'projects'
})
@View ({
  templateUrl: 'app/components/projects/projects.html'
})
export class ProjectsComponent {
  constructor() {
    console.log('projects')
  }
}