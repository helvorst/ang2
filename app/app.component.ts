import { Component, OnInit } from '@angular/core';
import { Person } from './00_classes/person';
import { PersonService } from './01_services/person.service'


@Component({
    selector: 'ang2',
    template: `
    <div>
      <a routerLink='/person-list'>List</a>
      <a routerLink='/dash'>Dash</a>
    </div>
    <router-outlet></router-outlet>
      
    `
})
export class AppComponent  {


}