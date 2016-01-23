import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'skills',
  inputs: [ 'skills' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="skills">
    <header title="Skills"><span class="fa fa-lg fa-code"></span></header>
    <table>
      <thead>
        <tr>
          <th>Skills</th>
          <th>Keywords</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#set of skills.sets">
          <td style="width: 25%;">{{ set.name }}</td>
          <td><keywords [keywords]="set.skills"></keywords></td>
        </tr>
      </tbody>
    </table>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class SkillsComponent {
  empty () {
    return Object.keys(this.skills).length === 0;
  }
}
