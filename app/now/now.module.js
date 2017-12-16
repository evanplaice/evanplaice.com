import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NowComponent } from './now.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    NowComponent
  ],
  declarations: [
    NowComponent
  ],
  providers: []
})
export class NowModule { }
