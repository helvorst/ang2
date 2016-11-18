import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule } from '@angular/material';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component';
import {PersonDetailsComponent} from './person-details.component';

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot(), HttpModule],
    declarations: [AppComponent, PersonDetailsComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}