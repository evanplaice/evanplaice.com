import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';
import { ProjectsService } from './projects.service';

@NgModule({
  imports: [
    SharedModule
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
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ProjectsModule { }
