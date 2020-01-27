import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    #social > a {
      margin-left: 10px;
      margin-right: 10px;
      font-size: 1.2rem;
    }

    #social svg {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      fill: #4183c4;
    }

    #masthead {
      max-height: 365px;
    }

    .container {
      display: flex;
    }

    picture {
      margin: 0 auto;
    }

    picture img, picture source {
      width: 100%;
      object-fit: cover;
    }
  `]
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
