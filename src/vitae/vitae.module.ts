import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { VitaeComponent } from './vitae.component';

@NgModule({
  exports: [
    VitaeComponent
  ],
  declarations: [
    VitaeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class VitaeModule { }
