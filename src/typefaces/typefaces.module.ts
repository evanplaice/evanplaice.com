import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TypefacesComponent } from './typefaces.component';

@NgModule({
  exports: [
    TypefacesComponent
  ],
  declarations: [
    TypefacesComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class TypefacesModule { }
