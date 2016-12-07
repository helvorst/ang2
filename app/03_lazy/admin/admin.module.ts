
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { MaterialModule } from '@angular/material';
// import { HttpModule } from '@angular/http';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

//import { APP_CONFIG, appCfg } from '../../app.config'
import {AdminComponent} from './admin.component';
import {ROUTES_ADM} from './routing'

@NgModule({
    imports: [
        ROUTES_ADM
        // BrowserModule,
        // FormsModule,
        // ReactiveFormsModule,
        // MaterialModule.forRoot(),
        // HttpModule
    ],
    declarations: [AdminComponent],
    bootstrap: [AdminComponent],
    // providers: [
    //     { provide: APP_CONFIG, useValue: appCfg }
    // ]
})
export class AdminModule { }