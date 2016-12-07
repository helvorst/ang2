

import {Routes, RouterModule} from '@angular/router'
import { AdminComponent } from './admin.component';

const routes_adm = [
    {path: '', component: AdminComponent}
];


export const ROUTES_ADM = RouterModule.forChild(routes_adm)