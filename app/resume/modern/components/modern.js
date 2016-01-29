import { Component, View, ViewEncapsulation } from 'angular2/core';
import { MODERN_DIRECTIVES } from '../modern';

import template from './modern.html!text';
import fontAwesome from 'font-awesome/css/font-awesome.min.css!text';
import style from './modern.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  template: template,
  styles: [ style, fontAwesome ],
  directives: [ MODERN_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class ModernComponent {
  constructor () {
    // console.log('resume');
  }
}
