import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES } from '../../shared/shared';

@Component({
  selector: 'recognition',
  inputs: [ 'recognition' ]
})
@View({
  template: `
  <template [ngIf]="!empty()">
  <hr>
  <section id="recognition">
    <header title="Recognition"><span class="fa fa-lg fa-trophy"></span></header>
    <div *ngFor="#award of recognition">
      <h3>
        <template [ngIf]="!award.from">
          <em>{{ award.title }}</em>
        </template>
        <template [ngIf]="award.from">
          <em>{{ award.title }}, </em>
          <template [ngIf]="!award.url">{{ award.from }}</template>
          <template [ngIf]="award.url"> <a href="{{ award.url }}">{{ award.from }}</a></template>
        </template>
      </h3>
      <duration [start]="award.date"></duration>
      <summary>{{ award.summary }}</summary>
    </div>
  </section>
  </template>
  `,
  directives: [ TEMPLATE_DIRECTIVES ]
})
export class RecognitionComponent {
  empty () {
    // has awards
    return this.recognition.length === 0;
  }
}
