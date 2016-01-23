import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'interests',
  inputs: [ 'interests' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="interests">
    <header title="Interests"></header>
    <div *ngFor="#interest of interests">
      <h3>
        <em>{{ interest.name }}</em>
      </h3>
      <keywords [keywords]="interest.keywords"></keywords>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class InterestsComponent {
  empty () {
    return Object.keys(this.interests).length === 0;
  }
}
