import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    #social > a {
      margin-left: 5px;
      margin-right: 5px;
      font-size: 1.2rem;
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
