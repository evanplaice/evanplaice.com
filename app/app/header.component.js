import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'heading',
  templateUrl: 'app/app/header.component.html'
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
