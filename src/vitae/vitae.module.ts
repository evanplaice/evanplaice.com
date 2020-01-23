import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { VitaeComponent } from './vitae.component';

@NgModule({
  exports: [
    VitaeComponent
  ],
  declarations: [
    VitaeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class VitaeModule { }
