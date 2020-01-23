import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private location: Location) {
    this.location = location;
  }

  // adds an 'active' class to the currently selected link
  isActive(path: string) {
    return this.location.path().indexOf(path) > -1;
  }
}
