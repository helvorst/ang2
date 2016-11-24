import { Injectable } from '@angular/core'
import { Person } from '../00_classes/person'
import 'rxjs/add/operator/toPromise';
import { Headers, Http, URLSearchParams, RequestOptions, Response } from '@angular/http';

@Injectable()
export class PersonService {

    constructor(private http: Http) { };
  

    getPersons(): Promise<Person[]> {
        const baseUrl = 'http://localhost:3333/';
        return this.http.get(baseUrl + 'persons')
            .toPromise()
            .then(rsp => rsp.json() as Person[])
            .catch(this.handleError)

    }

    search(search: string) {
        const baseUrl = 'http://localhost:3333/';
        let ro: RequestOptions = new RequestOptions(),
            urlsp: URLSearchParams = new URLSearchParams();
            urlsp.set('name_like', search);
            ro.search = urlsp;
            return this.http.get(baseUrl+'persons', ro)
            .map(data => data.json())
            .map(users => users.map(user => new Person(user)))
    }


    private handleError(error: any): Promise<any> {
        console.log(error)
        return Promise.reject(error.message || error)
    }
}