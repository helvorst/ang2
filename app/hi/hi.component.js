"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hi_service_1 = require('./../01_services/hi.service');
var HiComponent = (function () {
    function HiComponent(hiSrv) {
        this.hiSrv = hiSrv;
    }
    HiComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hi',
            templateUrl: 'hi.html',
            styles: [
                "\n   .alert{\n        background-color:red !important; \n    }\n    .centerHolder{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n        "
            ],
            animations: [
                core_1.trigger('error', [
                    core_1.state('showerror', core_1.style({ backgroundColor: 'red', transform: 'translateX(0%)' })),
                    //state('hideerror', style({backgroundColor: 'white' , transform:'scale(0)'})),
                    // transition('showerror => *', 
                    //     [
                    //     style({ transform:'translateX(500%)' /*backgroundColor: 'white' , transform: 'translateY(0)'*/}),
                    //     animate('5000ms ease-in')
                    //     ],
                    // ),
                    core_1.transition('* => showerror', [
                        core_1.style({ transform: 'translateX(-100%)' /* backgroundColor: 'white' /*, transform: 'translateY(0)'*/ }),
                        core_1.animate('1000ms ease-in')
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [hi_service_1.HiService])
    ], HiComponent);
    return HiComponent;
}());
exports.HiComponent = HiComponent;
//# sourceMappingURL=hi.component.js.map