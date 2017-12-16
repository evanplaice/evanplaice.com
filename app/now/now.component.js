import { Component } from '@angular/core';

@Component({
  selector: 'now',
  templateUrl: 'app/now/now.component.html'
})
export class NowComponent {
  constructor () {
    this.src = 'content/now/now.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master/' + this.src;
  }
}
