import { Component, View } from 'angular2/core';
import { DerpPipe } from 'app/vitae/pipes/derp';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/vitae/components/resume.html',
  pipes: [ DerpPipe ]
})
export class ResumeComponent {
  constructor() {
    console.log('resume');
  }
}