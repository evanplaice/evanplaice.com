import {
  Component,
  View
} from 'angular2/core';
import {
  MarkdownComponent
} from 'ng2-markdown-component';

@Component({
  selector: 'designs'
})
@View({
  templateUrl: 'app/components/designs/designs.html',
  directives: [
    MarkdownComponent
  ]
})
export class DesignsComponent {
  constructor () {
    console.log('designs');
    this.strikegroup = 'content/designs/strikegroup.md';
    this.jpasims = 'content/designs/jpasims.md';
  }
}
