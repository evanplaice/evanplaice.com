import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'about',
  inputs: [ 'about' ]
})
@View({
  template: `
  <hr>
  <section id="about">
    <header title="About"><span class="fa fa-lg fa-user"></span></header>
    <p>{{ about }}</p>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class AboutComponent {}
