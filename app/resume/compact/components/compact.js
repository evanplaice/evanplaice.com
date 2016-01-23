import { Component, View, ViewEncapsulation } from 'angular2/core';
import { COMPACT_DIRECTIVES } from '../compact';

import 'font-awesome/css/font-awesome.min.css!css';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/resume/compact/components/compact.html',
  styleUrls: [ 'app/resume/compact/components/compact.css' ],
  directives: [ COMPACT_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class CompactComponent {
  constructor () {
    // console.log('resume');
  }
}
