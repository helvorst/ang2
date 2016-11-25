import { PersonService } from './../01_services/person.service';
import { Person } from './../00_classes/person';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';



@Component({
    selector: 'dash',
    templateUrl: 'app/dash/dash.html',
})
export class DashComponent implements OnInit {

    //varianto 1
    persons: Person[] = [];
    //varianto 2 
    personsObservable: Observable<Person[]>;

    public searchBar: FormControl;
    public myGroup: FormGroup;
    searchSubscription: Subscription;
    allSubscription: Subscription;


    constructor(private prsSrv: PersonService) {
        this.searchBar = new FormControl('', []);

        this.myGroup = new FormGroup({
            searchBar: this.searchBar
        });
    }



    ngOnInit(): void {

        this.getPersons();
        //varianto 1 
        this.searchSubscription = this.searchBar.valueChanges
            //
            .debounce(() => Observable.timer(250))
            .distinctUntilChanged()
            .map((query: string) => this.prsSrv.search(query))
            .switch()
            .subscribe((prs: Person[]) => this.persons = prs)

        //...u can use promises
        // with service.function signature like: getPersons(): Promise<Person[]> 
        // this.prsSrv.getPersons()
        //     .then(resp => this.persons = resp)
        //     .catch(function() { 'Cant get persons for dash' })

        //varianto 2: u can use array of observables with |async
        // this.personsObservable = this.searchBar.valueChanges
        //     //.filter((query: string) => query.length > 0)
        //     .debounce(() => Observable.timer(250))
        //     .map((query: string) => this.prsSrv.search(query))
        //     .switch()

         //.switchMap(term => this.wikipediaService.search(term));

    }

    getPersons(): void {
        this.allSubscription = this.prsSrv.getPersons()
            .subscribe((prs: Person[]) => this.persons = prs)

        //this.personsObservable = this.prsSrv.getPersons()
    }


    ngOnDestroy() {

        this.searchSubscription.unsubscribe();
        this.allSubscription.unsubscribe();
    }

}