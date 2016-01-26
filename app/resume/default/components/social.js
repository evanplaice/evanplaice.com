import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'social',
  inputs: [ 'social' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="social">
    <header title="Social"></header>
    // TODO: implement this
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class SocialComponent {
  empty () {
    // has social info
    return this.social.length === 0;
  }
}
