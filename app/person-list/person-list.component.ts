import { Observable } from 'rxjs/Rx';
import { Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import { Person } from '../00_classes/person';
import { PersonService } from '../01_services/person.service'

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.html',
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(100)
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('bigBtn', [
            state('active', style({backgroundColor:'orange', transform:'scale(1.1)' })),
            transition( '* => active', animate('100ms ease-in'))
        ])
    ]

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