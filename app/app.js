import 'reflect-metadata';
import 'rxjs';
import 'semantic-ui';
import { enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { MainComponent } from './main/components/main';
import { ThoughtsService } from './thoughts/services/thoughts';
import { DesignService } from './designs/services/design';
import { ProjectService } from './projects/services/project';
import { ResumeService } from 'evanplaice/ng2-resume/resume';

enableProdMode();
bootstrap(MainComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  ThoughtsService,
  DesignService,
  ProjectService,
  ResumeService
]);
