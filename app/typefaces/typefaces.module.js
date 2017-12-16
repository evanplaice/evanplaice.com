import { NgModule } from '@angular/core';
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
  providers: []
})
export class TypefacesModule { }
