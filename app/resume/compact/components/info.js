import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'info',
  inputs: [ 'info' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <section id="info">
    {{ info.brief }}
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class InfoComponent {
  empty () {
    return Object.keys(this.info).length === 0;
  }
}
