import { DashComponent } from './dash/dash.component';
import { PersonListComponent } from './person-list/person-list.component';

import { RouterModule } from '@angular/router';


let routes =  [
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
            }
        ];

export const ROUTES = RouterModule.forRoot(routes)