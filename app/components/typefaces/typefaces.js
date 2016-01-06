import {
  Component,
  View
} from 'angular2/core';

import {
  MarkdownComponent
} from 'app/components/markdown/markdown';

@Component({
  selector: 'typefaces'
})
@View({
  templateUrl: 'app/components/typefaces/typefaces.html',
  directives: [
    MarkdownComponent
  ]
})
export class TypefacesComponent {}
