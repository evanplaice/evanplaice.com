import { Component, Input } from '@angular/core';
import { DesignModel } from './design.model';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
})
export class DesignComponent {
  @Input() design: DesignModel;
  @Input() last: boolean;

  constructor() {}

  descLink() {
    return 'https://content.evanplaice.com/designs/' + this.design.name + '/description.md' ;
  }

  thumbLink(i) {
    if (this.design.images[i]) {
      return 'https://content.evanplaice.com/designs/' + this.design.name + '/thumbs/' + this.design.images[i];
    }
  }
}
