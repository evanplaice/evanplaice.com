import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';

import { ThoughtsModule } from '../thoughts/thoughts.module';
import { DesignsModule } from '../designs/designs.module';
import { ProjectsModule } from '../projects/projects.module';
import { VitaeModule } from '../vitae/vitae.module';
import { NowModule } from '../now/now.module';
import { TypefacesModule } from '../typefaces/typefaces.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ThoughtsModule,
    DesignsModule,
    ProjectsModule,
    VitaeModule,
    NowModule,
    TypefacesModule
  ],
  exports: [
    CommonModule,
    RouterModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
