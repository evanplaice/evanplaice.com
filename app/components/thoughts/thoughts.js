import {
  Component,
  View
} from 'angular2/core';

// extension components
import { MarkdownComponent } from 'app/components/markdown/markdown';

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
    console.log('thoughts');
    this.src = 'documents/hello-world.md';
    this.gitHubLink = 'http://github.com/evanplaice/evanplaice.com/blob/master' + this.src;
  }
}
