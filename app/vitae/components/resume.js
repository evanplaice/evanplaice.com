import { Component, View, ViewEncapsulation } from 'angular2/core';
import { DerpPipe } from 'app/vitae/pipes/derp';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'content/vitae/themes/modern/modern.html',
  styleUrls: [ 'content/vitae/themes/modern/modern.css' ],
  pipes: [ DerpPipe ],
  encapsulation: ViewEncapsulation.Native
})
export class ResumeComponent {
  constructor() {
    console.log('resume');
  }
}