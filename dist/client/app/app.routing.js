var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from "@angular/core";
import { BodyComponent } from './body/body.component';
import { AboutHeaderComponent } from './pages/about/about.component';
import { APIDocHeaderComponent } from './pages/api/apidoc.component';
import { CoinsHeaderComponent } from './pages/coins/coins.component';
import { ExchangesHeaderComponent } from './pages/exchanges/exchanges.component';
import { PricingHeaderComponent } from './pages/pricing/pricing.component';
import { ProductsHeaderComponent } from './pages/products/products.component';
import { InvalidComponent } from './pages/invalid-page/invalid.component';
import { ExchangeAPIDocComponent } from './pages/api/exchange/xchcodes.component';
import { RestAPIDocComponent } from './pages/api/restapi/restapidoc.component';
import { WSSAPIDocComponent } from './pages/api/wssapi/wssapidoc.component';
var routes = [
    {
        path: '',
        component: BodyComponent
    },
    {
        path: 'home',
        component: BodyComponent
    },
    {
        path: 'about',
        component: AboutHeaderComponent
    },
    {
        path: 'apidoc',
        component: APIDocHeaderComponent,
        children: [
            {
                path: '',
                component: RestAPIDocComponent,
                outlet: "apidoc_sidebar"
            },
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
    },
    {
        path: 'exchanges',
        component: ExchangesHeaderComponent
    },
    {
        path: 'coins',
        component: CoinsHeaderComponent
    },
    {
        path: 'in',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'products',
        component: ProductsHeaderComponent
    },
    {
        path: 'pricing',
        component: PricingHeaderComponent
    },
    {
        path: '**',
        component: InvalidComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app.routing.js.map