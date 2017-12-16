import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

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
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { ThoughtsService } from '../thoughts/thoughts.service';
import { DesignsService } from '../designs/designs.service';
import { ProjectsService } from '../projects/projects.service';
import { ResumeService } from 'evanplaice/ng2-resume/resume';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
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
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,,
    ThoughtsService,
    DesignsService,
    ProjectsService,
    ResumeService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
