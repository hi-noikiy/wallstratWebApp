import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
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
const apidocRoutes: Routes = [ ];
@NgModule({
  imports: [ RouterModule.forChild(apidocRoutes) ],
  exports: [ RouterModule ]
})
export class APIDocRoutingModule { }