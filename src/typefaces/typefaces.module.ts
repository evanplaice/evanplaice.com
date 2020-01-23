import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class TypefacesModule { }
