import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component'
import {DashComponent} from './dash/dash.component'
import { PersonDetailsComponent } from './person-details/person-details.component';
import { OrderByPipe } from './02_pipes/orderby.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        HttpModule,
        RouterModule.forRoot([
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
        ])
    ],
    declarations: [AppComponent, PersonDetailsComponent, PersonListComponent, DashComponent, OrderByPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }