import { Component } from '@angular/core';

@Component({
    selector: 'ang2',
    template: `
    00000
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
      
      
    `
})
export class AppComponent { 

    people = [{id: 0, name: 'Jill'}, {id: 1, name: 'Albert'}, {id: 2, name: 'Tom'}];
    selectedPerson = this.people[0];
  
}