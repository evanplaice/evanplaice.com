import 'fomantic-ui/dist/components/reset.min.css';
import 'fomantic-ui/dist/components/container.min.css';
import 'fomantic-ui/dist/components/divider.min.css';
import 'fomantic-ui/dist/components/icon.min.css';
import 'fomantic-ui/dist/components/image.min.css';
import 'fomantic-ui/dist/components/item.min.css';
import 'fomantic-ui/dist/components/menu.min.css';
import 'fomantic-ui/dist/components/grid.min.css';
import 'fomantic-ui/dist/components/segment.min.css';
import 'fomantic-ui/dist/components/site.min.css';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
