import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

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
    <div *ngFor="#piece of writing">
      <h3>
        <em>{{ piece.title }}</em>
        <template [ngIf]="!piece.publisher.url">, {{ piece.publisher.name }}</template>
        <template [ngIf]="piece.publisher.url">, <a href="{{ piece.publisher.url }}">{{ piece.publisher.name }}</a></template>
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
  empty () {
    return Object.keys(this.writing).length === 0;
  }
}
