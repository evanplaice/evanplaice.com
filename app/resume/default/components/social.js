import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'social',
  inputs: [ 'social' ]
})
@View({
  template: ``, // TODO: implement this
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class SocialComponent {
  empty () {
    return this.social.length === 0;
  }
}
