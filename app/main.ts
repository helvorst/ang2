import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module'

const pBd = platformBrowserDynamic();
pBd.bootstrapModule(AppModule)