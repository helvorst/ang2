import {Component, Input} from '@angular/core';

@Component({
selector: 'person-details',
template: `
<div>
 <md-card>
            <md-card-subtitle>Details of</md-card-subtitle>
            <md-card-title>{{personToDetail.name}}</md-card-title>   
            <md-card-content>
                    <p>This is supporting text.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
            </md-card-content>
            <md-card-actions>
                    <button md-button>LIKE</button>
                    <button md-button>SHARE</button>
            </md-card-actions>
        </md-card>
</div>
       
`
})
export class PersonDetailsComponent{

    @Input()
    personToDetail
}