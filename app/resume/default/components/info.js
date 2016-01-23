import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'info',
  inputs: [ 'info' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="governance">
    <header title="Info"></header>
    {{ info.brief }}
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class InfoComponent {
  empty () {
    return Object.keys(this.info).length === 0;
  }
}
