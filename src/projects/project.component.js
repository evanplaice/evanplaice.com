import { Component } from '@angular/core';
import template from './project.component.html'

@Component({
  selector: 'project',
  inputs: [ 'project', 'last' ],
  template: template,
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
  constructor () {}

  descLink () {
    if (this.project.description) {
      return 'content/projects/' + this.project.description;
    }
  }
}
