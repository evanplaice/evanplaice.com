import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NowComponent } from './now.component';

@NgModule({
  exports: [
    NowComponent
  ],
  declarations: [
    NowComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class NowModule { }
