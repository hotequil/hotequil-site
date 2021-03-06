import { enableProdMode } from '@angular/core';

import { env } from '../envs/env.dev';

if(env.prod) enableProdMode();

export { AppServerModule } from '../app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
