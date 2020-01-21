import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { ThoughtComponent } from '../thoughts/thought.component';
import { DesignsComponent } from '../designs/designs.component';
import { DesignComponent } from '../designs/design.component';

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
