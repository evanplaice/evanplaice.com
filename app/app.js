import 'reflect-metadata';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {MainComponent} from './components/main/main';

bootstrap(MainComponent, [
  ROUTER_PROVIDERS
]);