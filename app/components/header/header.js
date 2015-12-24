import {
  Component,
  View
} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component ({
  selector: 'header',
  properties: ['title']
})
@View ({
  templateUrl: 'app/components/header/header.html',
  directives: ROUTER_DIRECTIVES
})
export class HeaderComponent {
  constructor() {
    console.log('header');
  }
}