import { PersonService } from './../01_services/person.service';
import { Person } from './../00_classes/person';
import { Component, OnInit, AfterContentChecked, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';



@Component({
    selector: 'dash',
    templateUrl: 'app/dash/dash.html',
    styles: [`
  

    `]
})
export class DashComponent implements OnInit, AfterContentChecked {

    //varianto 1
    persons: Person[] = [];
    //varianto 2 
    personsObservable: Observable<Person[]> = null;

    public searchBar: FormControl;
    public myGroup: FormGroup;
    searchSubscription: Subscription;
    allSubscription: Subscription;
    errorMessage: null | string = null;

    constructor(
        private prsSrv: PersonService
       
    ) {
        this.searchBar = new FormControl('', []);

        this.myGroup = new FormGroup({
            searchBar: this.searchBar
        });
    }



    ngOnInit(): void {

        this.getPersons();
        //varianto 1 
        // this.searchSubscription = this.searchBar.valueChanges
        //     //
        //     .debounce(() => Observable.timer(250))
        //     .distinctUntilChanged()
        //     .map((query: string) => this.prsSrv.search(query))
        //     .switch()
        //     .subscribe((prs: Person[]) => this.persons = prs)

        //...u can use promises
        // with service.function signature like: getPersons(): Promise<Person[]> 
        // this.prsSrv.getPersons()
        //     .then(resp => this.persons = resp)
        //     .catch(function() { 'Cant get persons for dash' })

        //varianto 2: u can use array of observables with |async, but 
        this.searchBar.valueChanges
            //.filter((query: string) => query.length > 0)
            .debounce(() => Observable.timer(250))
            .map((query: string) => this.prsSrv.search(query))
            .subscribe(xz =>  this.personsObservable = xz)
        //.switch()

        //.switchMap(term => this.wikipediaService.search(term));

        //this.searchBar.updateValueAndValidity('Jil');
        //this.searchBar.updateValueAndValidity()
        // this.myGroup.patchValue({
        //     searchBar: 'Todd Motto',

        // });


    }

    ngAfterContentChecked(): void {
        // this.myGroup.controls['searchBar'].setValue('')
        // this.myGroup.controls['searchBar'].dirty;

    }

    getPersons(): void {
        // this.allSubscription = this.prsSrv.getPersons()
        //     .subscribe(
        //         (prs: Person[]) => this.persons = prs,
        //          error =>  this.errorMessage = <any>error)

        this.personsObservable = this.prsSrv.getPersons()
    }


    ngOnDestroy() {

        //this.searchSubscription.unsubscribe();
        //this.allSubscription.unsubscribe();
    }

}