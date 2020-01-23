import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { ThoughtComponent } from '../thoughts/thought.component';
import { DesignsComponent } from '../designs/designs.component';
import { DesignComponent } from '../designs/design.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectComponent } from '../projects/project.component';
import { VitaeComponent } from '../vitae/vitae.component';

const routes: Routes = [
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
    path: 'design/:post',
    component: DesignComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'project/:post',
    component: ProjectComponent
  },
  {
    path: 'vitae',
    component: VitaeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
