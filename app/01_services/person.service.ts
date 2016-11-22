import {Injectable} from '@angular/core'
import {Person} from './person'
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';

@Injectable()
export class PersonService{

    constructor(private http: Http){};
    personsUrl = 'http://localhost:3030/persons';

    //people: Person[] = [{id: 0, name: 'Jill'}, {id: 1, name: 'Albert'}, {id: 2, name: 'Tom'}];

    getPersons(): Promise<Person[]>{
        return this.http.get(this.personsUrl)
        .toPromise()
        .then(rsp => rsp.json().data as Person[])
        .catch(this.handleError)
    
    }

   private handleError(error: any):  Promise<any>{
        console.log(error)
        return Promise.reject(error.message || error)
    }
}