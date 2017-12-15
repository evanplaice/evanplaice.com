import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: 'app/app/header.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class HeaderComponent {
  constructor (@Inject(Location) location) {
    this.location = location;
  }

  // adds an 'active' class to the currently selected link
  isActive (path) {
    return this.location.path().indexOf(path) > -1;
  }
}
