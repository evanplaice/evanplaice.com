import { Component } from '@angular/core';

@Component({
  selector: 'project',
  inputs: [ 'project', 'last' ],
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
  project;

  constructor () {}

  descLink () {
    if (this.project.description) {
      return 'http://content.evanplaice.com/projects/' + this.project.description;
    }
  }
}
