import { PersonService } from './../01_services/person.service';
import { Person } from './../00_classes/person';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


@Component({
    selector: 'dash',
    templateUrl: 'app/dash/dash.html'
})
export class DashComponent implements OnInit {

    persons: Person[] = [];
    public searchBar: FormControl;
    public myGroup: FormGroup;


    constructor(private prsSrv: PersonService) {
        this.searchBar = new FormControl('', []);

        this.myGroup = new FormGroup({
            searchBar: this.searchBar
        });
    }



    ngOnInit(): void {
        this.prsSrv.getPersons()
            .then(resp => this.persons = resp)
            .catch(function () { 'Cant get persons for dash' })

        this.searchBar.valueChanges
            //.filter((query: string) => query.length > 0)
            .debounce(() => Observable.timer(250))
            .map((query: string) => this.prsSrv.search(query))
            .switch()
            .subscribe((prs: Person[]) => this.persons = prs)
    }

    save(): void {
        console.log(this.persons)
    }

    searchPersons() {
        //this.prsSrv.search(this.search)
    }


}