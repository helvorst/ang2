import {Injectable} from '@angular/core'
import {Person} from './person'
@Injectable()
export class PersonService{
    people: Person[] = [{id: 0, name: 'Jill'}, {id: 1, name: 'Albert'}, {id: 2, name: 'Tom'}];
    getPersons(){
        return this.people;
    }
}