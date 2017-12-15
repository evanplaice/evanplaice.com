import 'zone.js';
import 'reflect-metadata';
import 'rxjs/Rx';
import 'semantic-ui';
import { enableProdMode } from 'angular-core';
import { bootstrap } from 'angular-platform-browser-dynamic';
import { ROUTER_PROVIDERS } from 'angular-router';
import { HTTP_PROVIDERS } from 'angular-http';
import { AppComponent } from './app/app.component';
import { ThoughtsService } from './thoughts/thoughts.service';
import { DesignsService } from './designs/designs.service';
import { ProjectsService } from './projects/projects.service';
import { ResumeService } from 'evanplaice/ng2-resume/resume';

enableProdMode();
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ThoughtsService,
  DesignsService,
  ProjectsService,
  ResumeService
]);
