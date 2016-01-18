import { Component, View, ViewEncapsulation } from 'angular2/core';

import { TEMPLATE_DIRECTIVES } from '../themes/default/default';
import { DerpPipe } from 'app/resume/pipes/derp';

import { EmploymentComponent } from '../themes/default/partials/employment';
import { ProjectsComponent } from '../themes/default/partials/projects';
import 'font-awesome/css/font-awesome.min.css!css';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/resume/themes/modern/modern.html',
  styleUrls: [ 'app/resume/themes/modern/modern.css' ],
  directives: [
    TEMPLATE_DIRECTIVES,
    EmploymentComponent,
    ProjectsComponent,
  ],
  pipes: [ DerpPipe ],
  encapsulation: ViewEncapsulation.Native
})
export class ResumeComponent {
  constructor() {
    console.log('resume');
  }
}