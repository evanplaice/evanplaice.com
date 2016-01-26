import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'speaking',
  inputs: [ 'speaking' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="speaking">
    <header title="Speaking"><span class="fa fa-lg fa-users"></span></header>
    <div *ngFor="#talk of speaking">
      <h3>
        <template [ngIf]="talk.title"><em>{{ talk.title }}</em>, </template>
        {{ talk.event }}
      </h3>
      <duration [start]="talk.date"></duration>
      <summary>{{ talk.summary }}</summary>
      <highlights [highlights]="talk.highlights"></highlights>
      <keywords [keywords]="talk.keywords"></keywords>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class SpeakingComponent {
  empty () {
    // has talks
    return this.speaking.length === 0;
  }
}
