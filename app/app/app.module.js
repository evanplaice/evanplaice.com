import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';

// directives & pipes
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { MarkdownComponent } from 'ng2-markdown-component';
import { DesignComponent } from '../designs/design.component';
import { ProjectComponent } from '../projects/project.component';
import { MODERN_COMPONENT } from 'evanplaice/ng2-resume/resume';

// providers & services

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    ROUTER_DIRECTIVES,
    MarkdownComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DesignComponent,
    ProjectComponent,
    MODERN_COMPONENT
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
