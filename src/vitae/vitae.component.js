import { Component } from '@angular/core';
import template from './vitae.component.html'


@Component({
  selector: 'vitae',
  template: template
})
export class VitaeComponent {
  constructor() {
    this.src = '/content/vitae/Evan.Plaice-Full.Stack.Dev.json';
  }
}
