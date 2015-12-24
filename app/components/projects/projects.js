import {
  Component,
  View
} from 'angular2';

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