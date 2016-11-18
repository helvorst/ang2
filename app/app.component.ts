import { Component } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service'

@Component({
    selector: 'ang2',
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
                <person-details [personToDetail] = selectedPerson>
                
                </person-details>
            </md-grid-tile>
       </md-grid-list>
      
      
    `,
    providers: [PersonService]
})
export class AppComponent {

    constructor(private personService: PersonService) { };
    people = this.personService.getPersons();
    selectedPerson: Person = this.people[0];

}