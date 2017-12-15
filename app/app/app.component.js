import { Component, Inject } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ROUTER_DIRECTIVES, Router, Routes } from '@angular/router';

// layout components
import { HeaderComponent } from 'app/app/header.component';
import { FooterComponent } from 'app/app/footer.component';

// route components
import { ThoughtsComponent } from 'app/thoughts/thoughts.component';
import { ThoughtComponent } from 'app/thoughts/thought.component';
import { DesignsComponent } from 'app/designs/designs.component';
import { ProjectsComponent } from 'app/projects/projects.component';
import { VitaeComponent } from 'app/vitae/vitae.component';
import { NowComponent } from 'app/now/now.component';
import { TypefacesComponent } from 'app/typefaces/typefaces.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app/app.component.html',
  directives: [ ROUTER_DIRECTIVES, HeaderComponent, FooterComponent ]
})
@Routes([
  {
    path: '/',
    component: ThoughtsComponent,
  },
  {
    path: '/thoughts',
    component: ThoughtsComponent
  },
  {
    path: '/thought/:post',
    component: ThoughtComponent
  },
  {
    path: '/designs',
    component: DesignsComponent
  },
  {
    path: '/projects',
    component: ProjectsComponent
  },
  {
    path: '/vitae',
    component: VitaeComponent
  },
  {
    path: '/now',
    component: NowComponent
  },
  {
    path: '/_typefaces',
    component: TypefacesComponent
  }
])
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
