import { AppModule } from './app.module';
import {OpaqueToken} from '@angular/core'

export let APP_CONFIG = new OpaqueToken('app.config.ts');

export interface appInterface {
    apiBase: string, 
}
export const appCfg: appInterface = {
    apiBase: 'http://localhost:3333/'
}