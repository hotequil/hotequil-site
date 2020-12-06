import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeHeadComponent } from './head/home.head.component';
import { HomeCardComponent } from './card/home.card.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeHeadComponent,
        HomeCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
