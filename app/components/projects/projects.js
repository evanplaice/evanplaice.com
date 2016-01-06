import {
  Component,
  View
} from 'angular2/core';
import {
  MarkdownComponent
} from 'ng2-markdown-component';

@Component({
  selector: 'projects'
})
@View({
  templateUrl: 'app/components/projects/projects.html',
  directives: [
    MarkdownComponent
  ]
})
export class ProjectsComponent {
  constructor () {
    console.log('projects');
    this.src = 'content/projects/projects.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master/' + this.src;
  }
}
