import { Component } from '@angular/core'
import { HiService } from './../01_services/hi.service'

@Component({
    moduleId: module.id,
    selector: 'hi',
    templateUrl: 'hi.html',
    styles: [
        `
   .alert{
        background-color:red !important; 
    }
    .centerHolder{
        display: flex;
        align-items: center;
        justify-content: center;
    }
        `
    ]
})
export class HiComponent {
    constructor(
        public hiSrv: HiService
    ) { }


}