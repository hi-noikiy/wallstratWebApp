var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { APIDocHeaderComponent } from './apidoc.component';
// import { ExchangeAPIDocComponent } from './exchange/xchcodes.component';
// import { RestAPIDocComponent } from './restapi/restapidoc.component';
// import { WSSAPIDocComponent } from './wssapi/wssapidoc.component';
/*const apidocRoutes: Routes = [
  {
    path: 'apidoc',
    component: APIDocHeaderComponent,
    children: [
      
      {
        path: 'exchange',
        component: ExchangeAPIDocComponent,
        outlet: "apidoc_sidebar"
      },
      {
        path: 'restapi',
        component: RestAPIDocComponent,
        outlet: "apidoc_sidebar"
      },
      {
        path: 'wssapi',
        component: WSSAPIDocComponent,
        outlet: "apidoc_sidebar"
      }
    ]

  }
];*/
var apidocRoutes = [];
var APIDocRoutingModule = /** @class */ (function () {
    function APIDocRoutingModule() {
    }
    APIDocRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(apidocRoutes)],
            exports: [RouterModule]
        })
    ], APIDocRoutingModule);
    return APIDocRoutingModule;
}());
export { APIDocRoutingModule };
//# sourceMappingURL=apidoc.routing.js.map