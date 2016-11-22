import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonService } from './person.service'


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