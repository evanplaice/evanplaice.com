import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThoughtsComponent } from './thoughts.component';
import { ThoughtComponent } from './thought.component';
import { ThoughtsService } from './thoughts.service';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule
  ],
  exports: [
    ThoughtsComponent,
    ThoughtComponent
  ],
  declarations: [
    ThoughtsComponent,
    ThoughtComponent,
  ],
  providers: [
    ThoughtsService,
  ]
})
export class ThoughtsModule { }
