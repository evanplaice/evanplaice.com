import { Component, View, ViewEncapsulation } from 'angular2/core';
import { BASIS_DIRECTIVES } from '../basis';

import template from './basis.html!text';
import style from './basis.css!text';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  template: template,
  style: [ style ],
  directives: [ BASIS_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class BasisComponent {
  constructor () {
    // console.log('resume');
  }
}
