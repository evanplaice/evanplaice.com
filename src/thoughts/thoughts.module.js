import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ThoughtsComponent } from './thoughts.component';
import { ThoughtComponent } from './thought.component';
import { ThoughtsService } from './thoughts.service';

@NgModule({
  imports: [
    SharedModule
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
