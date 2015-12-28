import {
  Directive,
  ElementRef
} from 'angular2/core';

// external
import showdown from 'showdown';
import prism from 'prism';
import 'prism/themes/prism-okaidia.css!';

@Directive({
  selector: 'ng2-markdown',
  inputs: [ 'src' ]
})
export class MarkdownComponent {
  constructor (elementRef) {
    console.log('markdown');

    // reference to the HTML element
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    // RAW markdown parsing
    this.convertRAW();
    this.style();

    // TODO: implement .md file parsing
    console.log(this.src);
  }

  // ES7 dependency injection
  static get parameters () {
    return [[ElementRef]];
  }

  convertRAW() {
    var converter = new showdown.converter();
    this.element.innerHTML = converter.makeHtml(
      this.element.innerHTML.split('\n').map((line) => line.trim()).join('\n')
    );
  };

  style() {
    prism.highlightAll(this.element.querySelectorAll('code'));
  };
}
