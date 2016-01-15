import { Component, View, Inject } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, Location } from 'angular2/router';

// layout components
import { HeaderComponent } from 'app/main/components/header';
import { FooterComponent } from 'app/main/components/footer';

// route components
import { ThoughtsComponent } from 'app/thoughts/components/thoughts';
import { DesignsComponent } from 'app/components/designs/designs';
import { ProjectsComponent } from 'app/components/projects/projects';
import { VitaeComponent } from 'app/components/vitae/vitae';
import { NowComponent } from 'app/components/now/now';
import { TypefacesComponent } from 'app/components/typefaces/typefaces';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/main/components/main.html',
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
export class MainComponent {
  constructor (@Inject(Location) location) {
    resolveHashURL(location);
  }
}

// redirects in inbound HashURL to its corresponding route
//  ex. evanplaice.com/#/designs => evanplaice.com/designs
function resolveHashURL (location) {
  let hash = location.platformStrategy._platformLocation.hash;
  if (hash) {
    let path = hash.substring(1);
    // console.log('RedirectTo: ' + path);
    location.go(path);
  }
}
