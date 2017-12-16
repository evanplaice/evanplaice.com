;import { RouterModule, Routes } from '@angular/router';

import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { ThoughtComponent } from 'app/thoughts/thought.component';
import { DesignsComponent } from 'app/designs/designs.component';
import { ProjectsComponent } from 'app/projects/projects.component';
import { VitaeComponent } from 'app/vitae/vitae.component';
import { NowComponent } from 'app/now/now.component';
import { TypefacesComponent } from 'app/typefaces/typefaces.component';


const routes = [
  {
    path: '',
    component: ThoughtsComponent,
  },
  {
    path: 'thoughts',
    component: ThoughtsComponent
  },
  {
    path: 'thought/:post',
    component: ThoughtComponent
  },
  {
    path: 'designs',
    component: DesignsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'vitae',
    component: VitaeComponent
  },
  {
    path: 'now',
    component: NowComponent
  },
  {
    path: '_typefaces',
    component: TypefacesComponent
  }
];

export const routing = RouterModule.forRoot(routes);
