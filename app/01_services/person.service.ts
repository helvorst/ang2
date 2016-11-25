import { Injectable, Inject} from '@angular/core'
import { Person } from '../00_classes/person'
import 'rxjs/add/operator/toPromise';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { APP_CONFIG, appInterface} from '../app.config'
@Injectable()
export class PersonService {

    constructor(private http: Http, @Inject(APP_CONFIG) private cfg/*: appInterface*/) { };


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
        return this.http.get(this.cfg.apiBase + 'persons')
            .map(data => data.json())
            .map(users => users.map(user => new Person(user)))
            .catch((err:any) => Observable.throw(err || 'cant get persons'))

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
            .catch((err:any) => Observable.throw(err || 'cant search persons'))
    }


  
}