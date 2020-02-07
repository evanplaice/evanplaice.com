import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    wc-social-link {
      --width: 20px;
      --height: 20px;
      --color: #4183c4;
      margin-left: 10px;
      margin-right: 10px;
    }

    /*Mobile*/
    @media screen and (min-width: 0px) and (max-width: 414px) {
      wc-social-link {
        margin-left: 15px;
        margin-right: 15px;
      }
    }

    #masthead {
      display: flex;
      max-height: 365px;
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
