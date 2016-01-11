import {
  Component,
  View
} from 'angular2/core';
import {
  ROUTER_DIRECTIVES,
  RouteConfig,
  Location
} from 'angular2/router';

// layout components
import { HeaderComponent } from 'app/components/header/header';
import { FooterComponent } from 'app/components/footer/footer';

// route components
import { ThoughtsComponent } from 'app/components/thoughts/thoughts';
import { DesignsComponent } from 'app/components/designs/designs';
import { ProjectsComponent } from 'app/components/projects/projects';
import { VitaeComponent } from 'app/components/vitae/vitae';
import { NowComponent } from 'app/components/now/now';
import { TypefacesComponent } from 'app/components/typefaces/typefaces';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/components/main/main.html',
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent
  ]
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
  constructor (location) {
    resolveHashURL(location);
  }

  // ES7 dependency injection
  static get parameters () {
    return [[Location]];
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
