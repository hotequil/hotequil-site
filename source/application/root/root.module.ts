import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutesModule } from '../routes/routes.module';
import { RootComponent } from './root.component';
import { HomeModule } from '../home/home.module';
import { FooterModule } from '../footer/footer.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
    declarations: [
        RootComponent
    ],
    imports: [
        BrowserModule,
        RoutesModule,
        HomeModule,
        FooterModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [
        RootComponent
    ]
})
export class RootModule{}
