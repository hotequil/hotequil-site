import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RootModule } from '../app/root/root.module';
import { env } from '../envs/env.dev';

if(env.prod) enableProdMode();

platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.error(err));
