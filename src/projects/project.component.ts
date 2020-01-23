import { Component, Input } from '@angular/core';
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styles: [`
    h2, h3 {
      margin-bottom: 10px !important;
    }
    h3 {
      margin-top: 10px;

    }
  `]
})
export class ProjectComponent {
  @Input() project: ProjectModel;
  @Input() last: boolean;

  constructor() {}

  descLink() {
    if (this.project.description) {
      return 'http://content.evanplaice.com/projects/' + this.project.description;
    }
  }
}
