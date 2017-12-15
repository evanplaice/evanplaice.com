import { Component } from '@angular/core';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'now',
  templateUrl: 'app/now/now.component.html',
  directives: [ MarkdownComponent ]
})
export class NowComponent {
  constructor () {
    this.src = 'content/now/now.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master/' + this.src;
  }
}
