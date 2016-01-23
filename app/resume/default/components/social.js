import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'social',
  inputs: [ 'social' ]
})
@View({
  template: ``, // TODO: implement this
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class SocialComponent {
  empty () {
    return this.social.length === 0;
  }
}
