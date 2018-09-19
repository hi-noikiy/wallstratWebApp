var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { AboutHeaderModule } from './pages/about/about.module';
import { APIDocHeaderModule } from './pages/api/apidoc.module';
import { CoinsHeaderModule } from './pages/coins/coins.module';
import { ExchangesHeaderModule } from './pages/exchanges/exchanges.module';
import { PricingHeaderModule } from './pages/pricing/pricing.module';
import { ProductsHeaderModule } from './pages/products/products.module';
import { InvalidHeaderModule } from './pages/invalid-page/invalid.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                HttpClientModule,
                HeaderModule,
                BodyModule,
                FooterModule,
                ChartsModule,
                BrowserAnimationsModule,
                AppRoutingModule,
                AboutHeaderModule,
                APIDocHeaderModule,
                CoinsHeaderModule,
                ExchangesHeaderModule,
                PricingHeaderModule,
                ProductsHeaderModule,
                InvalidHeaderModule
            ],
            declarations: [
                AppComponent,
            ],
            providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map