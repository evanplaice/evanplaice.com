import { Component, View, Inject } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, Location } from 'angular2/router';

// layout components
import { HeaderComponent } from 'app/app/components/header';
import { FooterComponent } from 'app/app/components/footer';

// route components
import { ThoughtsComponent } from 'app/thoughts/components/thoughts';
import { ThoughtComponent } from 'app/thoughts/components/thought';
import { DesignsComponent } from 'app/designs/components/designs';
import { ProjectsComponent } from 'app/projects/components/projects';
import { VitaeComponent } from 'app/vitae/components/vitae';
import { NowComponent } from 'app/now/components/now';
import { TypefacesComponent } from 'app/typefaces/components/typefaces';

@Component({
  selector: 'app',
  templateUrl: 'app/app/components/app.html',
  directives: [ ROUTER_DIRECTIVES, HeaderComponent, FooterComponent ]
})
@RouteConfig([
  {
    path: '/thoughts',
    name: 'Thoughts',
    component: ThoughtsComponent,
    useAsDefault: true
  },
  {
    path: '/thought/:post',
    name: 'Thought',
    component: ThoughtComponent
  },
  {
    path: '/designs',
    name: 'Designs',
    component: DesignsComponent
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsComponent
  },
  {
    path: '/vitae',
    name: 'Vitae',
    component: VitaeComponent
  },
  {
    path: '/now',
    name: 'Now',
    component: NowComponent
  },
  {
    path: '/_typefaces',
    name: 'Typefaces',
    component: TypefacesComponent
  }
])
export class AppComponent {
  constructor (@Inject(Location) location) {
    resolveHashURL(location);
  }
}

// redirects in inbound HashURL to its corresponding route
//  ex. evanplaice.com/#/designs => evanplaice.com/designs
function resolveHashURL (location) {
  // TODO: Fix this
  //let hash = location.platformStrategy._platformLocation.hash;
  //if (hash) {
  //  let path = hash.substring(1);
  //  // console.log('RedirectTo: ' + path);
  //  location.go(path);
  //}
  return;
}
