import { AdminModule } from './03_lazy/admin/admin.module';
import { DashComponent } from './dash/dash.component';
import { PersonListComponent } from './person-list/person-list.component';

import { RouterModule } from '@angular/router';


let routes = [
    {
        path: '',
        redirectTo: '/dash',
        pathMatch: 'full'

    },
    {
        path: 'person-list',
        component: PersonListComponent
    },
    {
        path: 'dash',
        component: DashComponent
    },
    {
        path: "admin",
        loadChildren: 'app/03_lazy/admin/admin.module#AdminModule' /*() => { System.import('./03_lazy/admin.module') }*/
    }
];

export const ROUTES = RouterModule.forRoot(routes)