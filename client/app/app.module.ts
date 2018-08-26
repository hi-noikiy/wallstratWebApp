import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
 
import { AppComponent } from './app.component';
 
import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';
import { FooterModule } from './footer/footer.module';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';

import {APP_BASE_HREF} from '@angular/common';


import { AboutHeaderModule } from './pages/about/about.module';
import { APIDocHeaderModule } from './pages/api/apidoc.module';
import { CoinsHeaderModule } from './pages/coins/coins.module';
import { ExchangesHeaderModule } from './pages/exchanges/exchanges.module';
import { PricingHeaderModule } from './pages/pricing/pricing.module';
import { ProductsHeaderModule } from './pages/products/products.module';
import { InvalidHeaderModule } from './pages/invalid-page/invalid.module';
 
@NgModule({
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
    providers: [{provide: APP_BASE_HREF, useValue : '/' }],
    bootstrap: [AppComponent]
})
 
export class AppModule { }