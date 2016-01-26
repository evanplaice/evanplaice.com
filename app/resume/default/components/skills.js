import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

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
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class SkillsComponent {
  empty () {
    // has sets
    if (this.skills.sets && Object.keys(this.skills.sets).length !== 0) {
      return false;
    }
    // has skills
    if (this.skills.list && Object.keys(this.skills.list).length !== 0) {
      return false;
    }
    return true
  }
}
