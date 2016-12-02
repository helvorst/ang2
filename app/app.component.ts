
import { appCfg } from './app.config';
import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { Person } from './00_classes/person';
import { PersonService } from './01_services/person.service'
import { ErrorService } from './01_services/error.service';
import { HiService } from './01_services/hi.service';

@Component({
  moduleId: module.id,
  selector: 'ang2',
  templateUrl: 'app.component.html',
  styles: [`
    .hel-toolbar {
      flex: 8;
   }
    .hel-title {
      flex: 1;
   }
 
   `
  ],
  providers: [PersonService, ErrorService, HiService],
})
export class AppComponent {

  constructor(
    errorSrv: ErrorService
  ) {

  }

  @ViewChild('start') start: ElementRef;



  closeMenu = function () {
    this.start.close();
  }

}