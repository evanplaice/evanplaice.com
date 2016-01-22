import { Component, View, ViewEncapsulation } from 'angular2/core';
import { MODERN_DIRECTIVES } from '../modern';

import 'font-awesome/css/font-awesome.min.css!css';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/resume/modern/components/modern.html',
  styleUrls: [ 'app/resume/modern/components/modern.css' ],
  directives: [ MODERN_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class ModernComponent {
  constructor () {
    // console.log('resume');
  }
}
