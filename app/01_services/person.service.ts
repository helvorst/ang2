
import { Injectable, Inject } from '@angular/core'
import { Person } from '../00_classes/person'
import 'rxjs/add/operator/toPromise';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { APP_CONFIG, appInterface } from '../app.config'

import { ErrorService } from './error.service';
import { HiService } from './../01_services/hi.service';



@Injectable()
export class PersonService {

    constructor(
        private http: Http,
        @Inject(APP_CONFIG) private cfg  /*: appInterface*/,
        private errorSrv: ErrorService,
        private hiSrv: HiService
    ) { };


    //...with promise
    // getPersons(): Promise<Person[]> {
    //     const baseUrl = 'http://localhost:3333/';
    //     return this.http.get(baseUrl + 'persons')
    //         .toPromise()
    //         .then(rsp => rsp.json() as Person[])
    //         .catch(this.handleError)

    // }
    //   private handleError(error: any): Promise<any> {
    //     console.log(error)
    //     return Promise.reject(error.message || error)
    // }


    getPersons(): Observable<Person[]> {

        //setTimeout(()=>{console.log('me done')}, 10000)

        this.hiSrv.init();
        

        return this.http.get(this.cfg.apiBase + 'persons')
            //.do(() => {})
            //.delay(5000)
            .map(data => data.json())
            .map(users => users.map(user => new Person(user)))
            .do(() => this.hiSrv.spinnerOnOff(false))
            .catch((err: any) => this.errorSrv.handleErrorObservable(err, 'service "person" cant get persons'))

    }


    search(search: string) {
        let ro: RequestOptions = new RequestOptions(),
            urlsp: URLSearchParams = new URLSearchParams();
        //urlsp.set('name_like', search);
        urlsp.set('q', search) //full-text search
        ro.search = urlsp;
        return this.http.get(this.cfg.apiBase + 'persons', ro)
            .map(data => data.json())
            .map(users => users.map(user => new Person(user)))
            .catch((err: any) => this.errorSrv.handleErrorObservable(err, 'service "person" cant search persons'))
    }



}
