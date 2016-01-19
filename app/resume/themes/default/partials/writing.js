import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

@Component({
  selector: 'writing',
  inputs: [ 'writing' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="writing">
    <header title="Writing"><span class="fa fa-lg fa-pencil"></span></header>
    <div *ngFor="#piece of writing | derp">
      <h3 *ngIf="piece.title">
        <em><a *ngIf="piece.url" href="{{ piece.url }}">{{ piece.title }}, </a></em>
        <template [ngIf]="!piece.url"><em>{{ piece.title }}, </em></template>
        <span *ngIf="piece.publisher.name">
          <a *ngIf="piece.publisher.url" href="{{ piece.publisher.url }}">{{ piece.publisher.name }}</a>
          <template [ngIf]="!piece.publisher.url">{{ piece.publisher.name }}</template>
        </span>
      </h3>
      <duration [start]="piece.date"></duration>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class WritingComponent {
  empty() {
    return Object.keys(this.writing).length == 0;
  }
}
