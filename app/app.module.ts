import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component'
import { DashComponent } from './dash/dash.component'
import { PersonDetailsComponent } from './person-details/person-details.component';
import { HiComponent } from './hi/hi.component'
import { OrderByPipe } from './02_pipes/orderby.pipe';

import { APP_CONFIG, appCfg } from './app.config'

import {ROUTES} from './routes'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        HttpModule,
        ROUTES
    ],
    declarations: [AppComponent, PersonDetailsComponent, PersonListComponent, DashComponent, OrderByPipe, HiComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: APP_CONFIG, useValue: appCfg }
    ]
})
export class AppModule { }