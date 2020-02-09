import { Component, Input } from '@angular/core';
import { DesignModel } from './design.model';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styles: [`
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, 250px);
      gap: 1.25em;
      padding: 1em;
      justify-items: center;
      justify-content: center;
      align-items: start;
    }
    
    .gallery img {
      box-shadow: 3px 3px 3px #777;
    }
  `]
})
export class DesignComponent {
  @Input() design: DesignModel;
  @Input() last: boolean;

  constructor() {}

  descLink() {
    return `https://content.evanplaice.com/designs/${this.design.name}/description.md`;
  }

  thumbLink(filename) {
    return `https://content.evanplaice.com/designs/${this.design.name}/thumbs/${filename}`;
  }

  altText(filename) {
    return `${filename.split('.')[0]} thumbnail`;
  }
}
