import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownComponent } from 'ng2-markdown';
import 'prismjs/components/prism-python.min';
import 'prismjs/themes/prism-okaidia.css';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    MarkdownComponent
  ],
  declarations: [
    MarkdownComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class SharedModule {}
