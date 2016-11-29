import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Person } from '../00_classes/person';
import { PersonService } from '../01_services/person.service'

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.html'

    //directives: [PersonDetailsComponent],
})
export class PersonListComponent implements OnInit {

    constructor(private personService: PersonService) { };
    //people = [];
     people: Observable<Person[]>;
    selectedPerson: Person = null;

    // fetchDetails() {
        
    //     this.personService.getPersons();
    // }

    ngOnInit(): void {

        this.people = this.personService.getPersons(); 
       
            // .then(prs => {
            // this.people = prs
            //     this.selectedPerson = this.people[0];
            // })
            // .catch(function () {
            //     console.log('error get persons')
            // })

    }




}