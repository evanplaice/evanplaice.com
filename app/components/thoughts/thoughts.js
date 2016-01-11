import {
  Component,
  View
} from 'angular2/core';
import {
  MarkdownComponent
} from 'ng2-markdown-component';

@Component({
  selector: 'thoughts'
})
@View({
  templateUrl: 'app/components/thoughts/thoughts.html',
  directives: [
    MarkdownComponent
  ]
})
export class ThoughtsComponent {
  constructor () {
    // console.log('thoughts');
    this.src = 'content/thoughts/hello-world.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master/' + this.src;
  }
}
