import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule } from '@angular/material';
import {AppComponent} from './app.component';
import {PersonDetailsComponent} from './person-details.component';
@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [AppComponent, PersonDetailsComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}