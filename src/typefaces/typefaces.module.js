import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TypefacesComponent } from './typefaces.component';

@NgModule({
  imports: [
    SharedModule
  ],
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
