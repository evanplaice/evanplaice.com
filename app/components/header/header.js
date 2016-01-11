import {
  Component,
  View
} from 'angular2/core';
import {
  ROUTER_DIRECTIVES,
  Location
} from 'angular2/router';

@Component({
  selector: 'header'
})
@View({
  templateUrl: 'app/components/header/header.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class HeaderComponent {
  constructor (location) {
    // console.log('header');
    this.location = location;
  }

  // ES7 dependency injection
  static get parameters () {
    return [[Location]];
  }

  // adds an 'active' class to the currently selected link
  isActive (path) {
    return this.location.path().indexOf(path) > -1;
  }
}
