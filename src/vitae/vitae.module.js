import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ResumeModule } from 'ngx-freshresume';
import { VitaeComponent } from './vitae.component';

@NgModule({
  imports: [
    SharedModule,
    ResumeModule
  ],
  exports: [
    VitaeComponent
  ],
  declarations: [
    VitaeComponent
  ],
  providers: []
})
export class VitaeModule { }
