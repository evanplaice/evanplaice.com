import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'reading',
  inputs: [ 'reading' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="reading">
    <header title="Reading"></header>
    <div *ngFor="#piece of reading">
      <h3>
        <template [ngIf]="!piece.url"><em>{{ piece.title }}</em></template>
        <template [ngIf]="piece.url"><a href="piece.url"><em>{{ piece.title }}</em></a></template>
        <template [ngIf]="piece.author">, {{ piece.author }}</template>
      </h3>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class ReadingComponent {
  empty () {
    return Object.keys(this.reading).length === 0;
  }
}
