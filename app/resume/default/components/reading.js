import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

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
        <template [ngIf]="!piece.url"><em>{{ piece.title }}</em><template [ngIf]="piece.author">, {{ piece.author }}</template></template>
        <template [ngIf]="piece.url"><a href="piece.url"><em>{{ piece.title }}</em></a><template [ngIf]="piece.author">, {{ piece.author }}</template></template>
      </h3>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class ReadingComponent {
  empty () {
    return Object.keys(this.reading).length === 0;
  }
}
