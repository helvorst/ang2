import { Component, OnInit } from '@angular/core';
import { Person } from '../00_classes/person';
import { PersonService } from '../01_services/person.service'


@Component({
    selector: 'person-list',
    template: `
    <md-grid-list cols="5"  [style.background]="'lightblue'" gutterSize="4px">
            <md-grid-tile>
                <md-list dense>
                      <md-list-item *ngFor="let person of people"> 
                          <button md-raised-button color="primary" (click)="selectedPerson=person">{{person.name}}</button>
                      </md-list-item>
                </md-list>
            </md-grid-tile>

            <md-grid-tile>
                <person-details [personToDetail] = selectedPerson></person-details>
            </md-grid-tile>
     </md-grid-list>
      
    `,
    providers: [PersonService],
    //directives: [PersonDetailsComponent],
})
export class PersonListComponent implements OnInit {

    constructor(private personService: PersonService) { };
    people = [];
    selectedPerson: Person = null;

    ngOnInit(): void {

        this.personService.getPersons()
        .then(prs => this.people = prs)
        .catch(function(){
            console.log('error get persons')
        })
        this.selectedPerson = this.people[0];
    }




}