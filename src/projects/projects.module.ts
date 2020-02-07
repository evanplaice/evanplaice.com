import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';
import { ProjectsService } from './projects.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProjectsComponent,
    ProjectComponent
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
  ],
  providers: [
    ProjectsService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProjectsModule { }
