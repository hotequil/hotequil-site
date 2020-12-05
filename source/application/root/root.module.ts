import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule } from '../routes/routes.module';
import { RootComponent } from './root.component';
import { HomeModule } from '../home/home.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        RoutesModule,
        HomeModule,
        FooterModule
    ],
    providers: [],
    bootstrap: [
        RootComponent
    ]
})
export class RootModule{}
