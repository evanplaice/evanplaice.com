import 'reflect-metadata';
import 'rxjs';
import { enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { MainComponent } from './main/components/main';
import { DesignService } from './designs/services/design';
import { ProjectService } from './services/project';
import { VitaeService } from './services/vitae';

enableProdMode();
bootstrap(MainComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  DesignService,
  ProjectService,
  VitaeService
]);
