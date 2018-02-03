import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import template from './header.component.html'

@Component({
  selector: 'heading',
  template: template
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
