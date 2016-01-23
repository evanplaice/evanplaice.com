import { Component, View, ViewEncapsulation } from 'angular2/core';
import { TEMPLATE_PIPES } from '../../shared/shared';
import { POSITIVE_DIRECTIVES } from '../positive';

import 'font-awesome/css/font-awesome.min.css!css';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/resume/positive/components/positive.html',
  styleUrls: [ 'app/resume/positive/components/positive.css' ],
  directives: [ POSITIVE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ],
  encapsulation: ViewEncapsulation.Native
})
export class PositiveComponent {
  constructor () {
    // console.log('resume');
  }
}
