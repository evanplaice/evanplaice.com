import { NgModule } from '@angular/core';
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
  ]
})
export class DesignsModule { }
