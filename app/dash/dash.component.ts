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
    //persons: Person[] = [];
    //varianto 2
    persons: Observable<Person[]>;
    public searchBar: FormControl;
    public myGroup: FormGroup;
    searchSubscription: Subscription;


    constructor(private prsSrv: PersonService) {
        this.searchBar = new FormControl('', []);

        this.myGroup = new FormGroup({
            searchBar: this.searchBar
        });
    }



    ngOnInit(): void {
        this.prsSrv.getPersons()
            .then(/*resp => this.persons = resp*/)
            .catch(function() { 'Cant get persons for dash' })

        //varianto 1 
        // this.searchSubscription = this.searchBar.valueChanges
        //     //.filter((query: string) => query.length > 0)
        //     .debounce(() => Observable.timer(250))
        //     .map((query: string) => this.prsSrv.search(query))
        //     .switch()
        //     .subscribe((prs: Person[]) => this.persons = prs)

        //varianto 2
        this.persons = this.searchBar.valueChanges
            //.filter((query: string) => query.length > 0)
            .debounce(() => Observable.timer(250))
            .map((query: string) => this.prsSrv.search(query))
            .switch()

    }

    save(): void {
        console.log(this.persons)
    }


    ngOnDestroy() {
        //varianto 1
        //this.searchSubscription.unsubscribe();
    }

}