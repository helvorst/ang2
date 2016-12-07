import { Component,  trigger, state, style, transition, animate } from '@angular/core'
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
    ],
      animations: [
        trigger('error', [
             state('showerror', style({backgroundColor: 'red' , transform:'translateX(0%)'})),
             //state('hideerror', style({backgroundColor: 'white' , transform:'scale(0)'})),
            // transition('showerror => *', 
            //     [
            //     style({ transform:'translateX(500%)' /*backgroundColor: 'white' , transform: 'translateY(0)'*/}),
            //     animate('5000ms ease-in')
            //     ],
                
            // ),
             transition('* => showerror', 
                [
                style({  transform:'translateX(-100%)' /* backgroundColor: 'white' /*, transform: 'translateY(0)'*/}),
                animate('1000ms ease-in')
                ]
             )
        ])
    ]

})
export class HiComponent {
    constructor(
        public hiSrv: HiService
    ) { }


}