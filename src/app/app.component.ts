import { Component } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
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
    const hash: string = url._platformLocation.hash;
    if (hash) {
      const path = '/' + hash.substring(1);
      // console.log('RedirectTo: ' + path);
      // setTimeout is a kludge required because navigate
      //  can be cancelled if it takes too long to fire.
      setTimeout(() => { router.navigate([path]); });
    }
    return;
  }
}
