import { Component, View, ViewEncapsulation } from 'angular2/core';

import { DurationComponent } from 'app/resume/components/duration';
import { HighlightsComponent } from 'app/resume/components/highlights';
import { CurriculumComponent } from 'app/resume/components/curriculum';
import { DerpPipe } from 'app/resume/pipes/derp';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/resume/themes/modern/modern.html',
  styleUrls: [ 'app/resume/themes/modern/modern.css' ],
  directives: [
    DurationComponent,
    HighlightsComponent,
    CurriculumComponent,
  ],
  pipes: [ DerpPipe ],
  encapsulation: ViewEncapsulation.Native
})
export class ResumeComponent {
  constructor() {
    console.log('resume');
  }
}