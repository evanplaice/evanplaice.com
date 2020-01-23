import { Component } from '@angular/core';

@Component({
  selector: 'design',
  inputs: [ 'design', 'last' ],
  templateUrl: './design.component.html',
})
export class DesignComponent {
  design;
  last;

  constructor () {}

  descLink () {
    return 'http://content.evanplaice.com/designs/' + this.design.name + '/description.md' ;
  }

  thumbLink (i) {
    if (this.design.images[i]) {
      return 'http://content.evanplaice.com/designs/' + this.design.name + '/thumbs/' + this.design.images[i];
    }
  }
}
