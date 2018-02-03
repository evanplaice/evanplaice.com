import { Component } from '@angular/core';
import template from './design.component.html'

@Component({
  selector: 'design',
  inputs: [ 'design', 'last' ],
  template: template
})

export class DesignComponent {
  constructor () {}

  descLink () {
    if (this.design.description) {
      return 'content/designs/' + this.design.name + '/' + this.design.description;
    }
  }

  thumbLink (i) {
    if (this.design.images[i]) {
      return 'content/designs/' + this.design.name + '/thumbs/' + this.design.images[i];
    }
  }
}
