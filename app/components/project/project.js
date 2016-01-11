import {
  Component,
  View
} from 'angular2/core';
import {
  MarkdownComponent
} from 'ng2-markdown-component';

@Component({
  selector: 'project',
  inputs: [
    'project',
    'last'
  ]
})
@View({
  templateUrl: 'app/components/project/project.html',
  styles: [`
    h2, h3 {
      margin-bottom: 10px;
    }
    h3 {
      margin-top: 10px;
    }
  `],
  directives: [
    MarkdownComponent
  ]
})
export class ProjectComponent {
  constructor() {
    console.log('project');
  }

  descLink() {
    if (this.project.description)
    return 'content/projects/' + this.project.description;
  }
}