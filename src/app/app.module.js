import { NgModule } from '@angular/core';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ResumeModule } from 'ngx-freshresume';
import { ThoughtsModule } from '../thoughts/thoughts.module';
import { DesignsModule } from '../designs/designs.module';
import { ProjectsModule } from '../projects/projects.module';
import { VitaeModule } from '../vitae/vitae.module';
import { NowModule } from '../now/now.module';
import { TypefacesModule } from '../typefaces/typefaces.module';
import { routing } from './app.routes';

// declarations
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ThoughtsModule,
    DesignsModule,
    ProjectsModule,
    VitaeModule,
    NowModule,
    TypefacesModule,
    routing,
    ResumeModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
