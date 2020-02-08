import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styles: [`
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
export class AppComponent {
  title = 'Thoughts and Works by Evan Plaice';

  constructor(private url: LocationStrategy, private router: Router) {
    this.resolveHashURL(this.url, this.router);
  }

  // redirects in inbound HashURL to its corresponding route
  //  ex. evanplaice.com/#/designs => evanplaice.com/designs
  resolveHashURL(url, router) {
    if (!url._platformLocation) { return; }
    const hashURL: string = url._platformLocation.hash;
    if (hashURL) {
      const pathURL = '/' + hashURL.substring(1);
      setTimeout(() => { router.navigate([pathURL]); });
    }
  }
}
