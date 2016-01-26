import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'languages',
  inputs: [ 'languages' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="languages">
    <header title="Languages"></header>
    // TODO: implement this
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class LanguagesComponent {
  empty () {
    // has languages
    return this.languages.length === 0;
  }
}
