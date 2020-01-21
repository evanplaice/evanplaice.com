import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignsComponent } from './designs.component';
import { DesignComponent } from './design.component';
import { DesignsService } from './designs.service';

@NgModule({
  imports: [
    CommonModule,
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
