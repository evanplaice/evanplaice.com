import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'references',
  inputs: [ 'references' ]
})
@View({
  template:  `
  <hr>
  <section id="references">
    <header title="References"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="#reference of references | derp">
      <h3>{{ reference.name }}</h3>
      <template [ngIf]="reference.contact">
        <ul *ngFor="#contact of reference.contact">
          <li>{{ contact.flavor }} - {{ contact.value }}</li>
        </ul>
      </template>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class ReferencesComponent {}
