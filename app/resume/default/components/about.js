import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'about',
  inputs: [ 'about' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="about">
    <header title="About"><span class="fa fa-lg fa-user"></span></header>
    <p>{{ about }}</p>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class AboutComponent {
  empty() {
    return this.about === undefined;
  }
}
