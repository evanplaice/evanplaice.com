import { Component } from '@angular/core';
import template from './typefaces.component.html'

@Component({
  selector: 'typefaces',
  template: template
})
export class TypefacesComponent {
  constructor () {
    this.src = 'content/typefaces/typefaces.md';
  }
}

