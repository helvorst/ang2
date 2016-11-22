import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
//import { PersonDetailsComponent } from './person-details.component';
import { PersonListComponent } from './person-list.component'
import {DashComponent} from './dash.component'
import { PersonDetailsComponent } from './person-details.component';


@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        HttpModule,
        RouterModule.forRoot([
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
    declarations: [AppComponent, PersonDetailsComponent, PersonListComponent, DashComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }