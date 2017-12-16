import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ng2-markdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MarkdownModule
  ],
  declarations: [],
  providers: []
})
export class SharedModule { }
