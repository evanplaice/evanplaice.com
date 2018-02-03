import { Component } from '@angular/core';
import template from './now.component.html'

@Component({
  selector: 'now',
  template: template
})
export class NowComponent {
  constructor () {
    this.src = 'content/now/now.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master/' + this.src;
  }
}
