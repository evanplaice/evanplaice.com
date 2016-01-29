import 'reflect-metadata';
import 'rxjs';
import 'semantic-ui';
import { enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { MainComponent } from './main/components/main';
import { DesignService } from './designs/services/design';
import { ProjectService } from './projects/services/project';
import { ResumeService } from './resume/resume';

enableProdMode();
bootstrap(MainComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  DesignService,
  ProjectService,
  ResumeService
]);
