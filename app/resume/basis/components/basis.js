import { Component, View, ViewEncapsulation } from 'angular2/core';
import { BASIS_DIRECTIVES } from '../basis';

@Component({
  selector: 'resume',
  inputs: [ 'resume' ]
})
@View({
  templateUrl: 'app/resume/basis/components/basis.html',
  styleUrls: [ 'app/resume/basis/components/basis.css' ],
  directives: [ BASIS_DIRECTIVES ],
  encapsulation: ViewEncapsulation.Native
})
export class BasisComponent {
  constructor () {
    // console.log('resume');
  }
}
