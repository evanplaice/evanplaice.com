import { Component, Inject } from 'angular2/core';
import { ROUTER_DIRECTIVES, Location } from 'angular2/router';

@Component({
  selector: 'header',
  templateUrl: 'app/app/header.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class HeaderComponent {
  constructor (@Inject(Location) location) {
    // console.log('header');
    this.location = location;
  }

  // adds an 'active' class to the currently selected link
  isActive (path) {
    // TODO: Fix this
    //return this.location.path().indexOf(path) > -1;
    return;
  }
}
