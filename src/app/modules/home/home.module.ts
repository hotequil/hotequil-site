import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeHeadComponent } from './head/home-head.component';
import { HomeCardComponent } from './card/home-card.component';
import { HomeProjectsComponent } from './projects/home-projects.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeHeadComponent,
        HomeCardComponent,
        HomeProjectsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }
