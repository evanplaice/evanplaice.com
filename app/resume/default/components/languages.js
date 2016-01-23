import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from '../../shared/shared';

@Component({
  selector: 'languages',
  inputs: [ 'languages' ]
})
@View({
  template: ``, // TODO: implement this
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class LanguagesComponent {
  empty () {
    return this.languages.length === 0;
  }
}
