import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

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
        <template [ngIf]="!piece.publisher.url"><em>{{ piece.title }}</em>, {{ piece.publisher.name }}</template>
        <template [ngIf]="piece.publisher.url"><em>{{ piece.title }}</em>, <a href="{{ piece.publisher.url }}">{{ piece.publisher.name }}</a></template>
      </h3>
      <duration [start]="piece.date"></duration>
      <summary>{{ piece.summary }}</summary>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class WritingComponent {
  empty () {
    // has pieces
    return this.writing.length === 0;
  }
}
