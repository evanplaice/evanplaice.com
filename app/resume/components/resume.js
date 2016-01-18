import { Component, View, ViewEncapsulation } from 'angular2/core';

import { TEMPLATE_DIRECTIVES } from '../themes/default/default';
import { DerpPipe } from 'app/resume/pipes/derp';

import { SkillsComponent} from '../themes/modern/partials/skills';
import { EmploymentComponent } from '../themes/default/partials/employment';
import { ProjectsComponent } from '../themes/default/partials/projects';
import { EducationComponent } from '../themes/default/partials/education';
import { ServiceComponent } from '../themes/default/partials/service';
import { SamplesComponent } from '../themes/default/partials/samples';
import { WritingComponent } from '../themes/default/partials/writing';
import { RecognitionComponent } from '../themes/default/partials/recognition';
import { SpeakingComponent } from '../themes/default/partials/speaking';
import { TestimonialsComponent } from '../themes/default/partials/testimonials';
import { ReferencesComponent } from '../themes/default/partials/references';

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
    SkillsComponent,
    EmploymentComponent,
    ProjectsComponent,
    EducationComponent,
    ServiceComponent,
    SamplesComponent,
    WritingComponent,
    RecognitionComponent,
    SpeakingComponent,
    TestimonialsComponent,
    ReferencesComponent
  ],
  pipes: [ DerpPipe ],
  encapsulation: ViewEncapsulation.Native
})
export class ResumeComponent {
  constructor() {
    console.log('resume');
  }
}