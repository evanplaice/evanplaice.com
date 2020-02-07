import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import 'regenerator-runtime';
import '@vanillawc/wc-icon-rule/index.js';
import '@vanillawc/wc-markdown/index.js';
import '@vanillawc/wc-resume/index.js';
import '@vanillawc/wc-social-link/index.js';

enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
