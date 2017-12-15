import { Component } from 'angular-core';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'design',
  inputs: [ 'design', 'last' ],
  templateUrl: 'app/designs/design.component.html',
  directives: [ MarkdownComponent ]
})

export class DesignComponent {
  constructor () {
    // console.log('design');
  }

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
