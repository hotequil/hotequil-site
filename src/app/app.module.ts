import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { FooterModule } from './modules/footer/footer.module';
import { HeaderModule } from './modules/header/header.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutesModule,
        HomeModule,
        FooterModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule{}
