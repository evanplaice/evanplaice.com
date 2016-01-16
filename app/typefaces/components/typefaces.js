import { Component, View } from 'angular2/core';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'typefaces'
})
@View({
  templateUrl: 'app/typefaces/components/typefaces.html',
  directives: [ MarkdownComponent ]
})
export class TypefacesComponent {
  constructor () {
    // console.log('typefaces');
  }
}