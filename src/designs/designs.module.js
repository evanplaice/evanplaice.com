import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DesignsComponent } from './designs.component';
import { DesignComponent } from './design.component';
import { DesignsService } from './designs.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DesignsComponent,
    DesignComponent
  ],
  declarations: [
    DesignsComponent,
    DesignComponent,
  ],
  providers: [
    DesignsService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class DesignsModule { }
