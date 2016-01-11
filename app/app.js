import 'reflect-metadata';
import 'rxjs';
import 'semantic-ui';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { MainComponent } from './components/main/main';

bootstrap(MainComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS
]);
