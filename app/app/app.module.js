import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ModernModule as ResumeModule } from 'ng2-resume';
import { routing } from './app.routes';

// directives & pipes
import { MarkdownModule } from 'ng2-markdown';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ThoughtsComponent } from '../thoughts/thoughts.component';
import { ThoughtComponent } from '../thoughts/thought.component';
import { DesignsComponent } from '../designs/designs.component';
import { DesignComponent } from '../designs/design.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ProjectComponent } from '../projects/project.component';
import { VitaeComponent } from '../vitae/vitae.component';
import { NowComponent } from '../now/now.component';
import { TypefacesComponent } from '../typefaces/typefaces.component';

// providers & services
import { ThoughtsService } from '../thoughts/thoughts.service';
import { DesignsService } from '../designs/designs.service';
import { ProjectsService } from '../projects/projects.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ResumeModule,
    MarkdownModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThoughtsComponent,
    ThoughtComponent,
    DesignsComponent,
    DesignComponent,
    ProjectsComponent,
    ProjectComponent,
    VitaeComponent,
    NowComponent,
    TypefacesComponent,
  ],
  providers: [
    ThoughtsService,
    DesignsService,
    ProjectsService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
