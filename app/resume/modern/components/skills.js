import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/shared/default';

@Component({
  selector: 'skills',
  inputs: [ 'skills' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="skills">
    <header title="Skills"></header>
    <span class="fa fa-lg fa-code"></span>
    <ul *ngFor="#set of skills.sets" class="list-unstyled">
      <li class="card card-nested card-skills">
        <div class="skill-level" rel="tooltip" title="{{ set.level }}" data-placement="left">
          <div class="skill-progress {{ set.level | lowercase }}"></div>
        </div>
        <div class="skill-info">
          <strong>{{ set.name }}</strong>
          <div class="space-top labels">
            <span *ngIf="set.skills">
              <span *ngFor="#skill of set.skills" class="label label-keyword">{{ skill }}</span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class SkillsComponent {
  empty() {
    return Object.keys(this.skills).length == 0;
  }
}
