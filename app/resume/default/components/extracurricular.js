import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'extracurricular',
  inputs: [ 'extracurricular' ]
})
@View({
  template: ``, // TODO: implement this
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ExtracurricularComponent {
  empty () {
    // has activities
    return this.extracurricular.length === 0;
  }
}
