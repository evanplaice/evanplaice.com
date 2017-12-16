import { Component, Inject } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: 'app/app/app.component.html'
})
export class AppComponent {
  constructor(@Inject(LocationStrategy) url, @Inject(Router) router) {   
    resolveHashURL(url, router)
  }
}

// redirects in inbound HashURL to its corresponding route
//  ex. evanplaice.com/#/designs => evanplaice.com/designs
function resolveHashURL(url, router) {
  let hash = url._platformLocation.hash;
  if (hash) {
    let path = '/' + hash.substring(1);
    // console.log('RedirectTo: ' + path);
    // setTimeout is a kludge required because navigate
    //  can be cancelled if it takes too long to fire.
    setTimeout(() => { router.navigate([path]); });
  }
  return;
}
