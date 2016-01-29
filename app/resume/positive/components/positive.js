import { Component, View, ViewEncapsulation } from 'angular2/core';
import { POSITIVE_DIRECTIVES } from '../positive';
import { TEMPLATE_PIPES } from '../../shared/shared';

import template from './positive.html!text';
import fontAwesome from 'font-awesome/css/font-awesome.min.css!text';
import style from './positive.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  template: template,
  styles: [ style, fontAwesome ],
  directives: [ POSITIVE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ],
  encapsulation: ViewEncapsulation.Native
})
export class PositiveComponent {
  constructor () {
    // console.log('resume');
  }
}
