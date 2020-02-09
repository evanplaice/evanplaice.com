import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    #pages {
      display: flex;
    }

    .nav-item {
      display: inline-block;
      font-size: 1rem;
      margin-top: 0;
      text-align: center;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      color: black;
    }

    .nav-item {
      border-left: 1px solid #ddd;
    }

    .nav-item:last-child {
      border-right: 1px solid #ddd;
    }

    .nav-item:hover {
      background-color: rgba(0, 0, 0, .075);
    }

    .active {
      background-color: rgba(0, 0, 0, .1);
    }

    #social {
      display: flex;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      margin-right: 10px;
    }

    wc-social-link {
      --width: 20px;
      --height: 20px;
      --color: #4183c4;
      margin-left: 10px;
      margin-right: 10px;
    }

    /* Mobile */
    @media screen and (min-width: 0px) and (max-width: 480px) {
      #pages {
        width: 100%;
        flex-direction: column;
      }

      .nav-item {
        border: none;
      }

      wc-social-link {
        margin-left: 15px;
        margin-right: 15px;
      }
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
