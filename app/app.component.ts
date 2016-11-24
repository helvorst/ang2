import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Person } from './00_classes/person';
import { PersonService } from './01_services/person.service'


@Component({
  selector: 'ang2',
  template: `

   <md-toolbar color="primary">
      <span class="hel-title">Ang 2</span>
      <!-- This fills the remaining space of the current row -->
      <span class="hel-toolbar">
        <button md-mini-fab (click)="start.opened ? start.close() : start.open()">
              <md-icon class="md-24">dashboard</md-icon>
        </button>
      </span>
      <span>smth</span>
   </md-toolbar>
  
   
    <md-sidenav-layout>
      <md-sidenav #start >
        <md-list>
          <md-list-item>
              <button md-button routerLink='/person-list' (click)="closeMenu()">List</button>
          </md-list-item>
          <md-list-item>
              <button md-button routerLink='/dash' (click)="closeMenu()" >Dash</button>
          </md-list-item>
        </md-list>
      </md-sidenav>

      <router-outlet></router-outlet>

  </md-sidenav-layout>
  
    
      
    `,
  styles: [`
    .hel-toolbar {
      flex: 8;
   }
    .hel-title {
      flex: 1;
   }
   `
  ],
   providers: [PersonService],
})
export class AppComponent {

  @ViewChild('start') start: ElementRef;


  closeMenu = function () {
    this.start.close();
  }

}