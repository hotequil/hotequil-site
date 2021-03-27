import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { BtnModule } from '../btn/btn.module';

@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        BtnModule
    ]
})
export class HeaderModule { }
