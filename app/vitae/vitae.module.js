import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ModernModule as ResumeModel } from 'ng2-resume';
import { VitaeComponent } from './vitae.component';
import { ResumeService } from 'ng2-resume';

@NgModule({
  imports: [
    SharedModule,
    ResumeModel
  ],
  exports: [
    VitaeComponent
  ],
  declarations: [
    VitaeComponent
  ],
  providers: [
    ResumeService,
  ]
})
export class VitaeModule { }
