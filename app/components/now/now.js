import {
  Component,
  View
} from 'angular2/core';

// extension components
import { MarkdownComponent } from 'app/components/markdown/markdown';

@Component({
  selector: 'now'
})
@View({
  templateUrl: 'app/components/now/now.html',
  directives: [
    MarkdownComponent
  ]
})
export class NowComponent {
  constructor () {
    console.log('now');
    this.src = 'content/now/now.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master/' + this.src;
  }
}
