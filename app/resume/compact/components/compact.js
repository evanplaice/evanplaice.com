import { Component, View, ViewEncapsulation } from 'angular2/core';
import { COMPACT_DIRECTIVES } from '../compact';

import template from './compact.html!text';
import fontAwesome from 'font-awesome/css/font-awesome.min.css!text';
import style from './compact.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  template: template,
  styles: [ style, fontAwesome ],
  directives: [ COMPACT_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class CompactComponent {
  constructor () {
    // console.log('resume');
  }
}
