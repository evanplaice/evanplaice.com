import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'references',
  inputs: [ 'references' ]
})
@View({
  template: `
  <template [ngIf]="!empty() && !references.private">
  <hr>
  <section id="references">
    <header title="References"><span class="fa fa-lg fa-thumbs-o-up"></span></header>
    <div *ngFor="#reference of references">
      <h3>
        <template [ngIf]="!reference.role"><em>{{ reference.name }}</em></template>
        <template [ngIf]="reference.role"><em>{{ reference.name }}</em>, {{ reference.role }}</template>
      </h3>
      <contacts [contacts]="reference.contact"></contacts>
      <p>{{ reference.summary }}</p>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ReferencesComponent {
  empty () {
    return this.references.length === 0;
  }
}
