import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThoughtsComponent } from './thoughts.component';
import { ThoughtComponent } from './thought.component';
import { ThoughtsService } from './thoughts.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ThoughtsComponent,
    ThoughtComponent
  ],
  declarations: [
    ThoughtsComponent,
    ThoughtComponent,
  ],
  providers: [
    ThoughtsService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ThoughtsModule { }
