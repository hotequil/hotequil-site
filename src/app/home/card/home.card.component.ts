import { Component, Input, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { LinkInterface } from '../../link/link.interface';
import { ImgInterface } from '../../img/img.interface';

@Component({
    selector: 'h-home-card',
    templateUrl: './home.card.component.html',
    styleUrls: ['./home.card.component.scss']
})
export class HomeCardComponent implements OnInit{
    @Input() name: string|undefined;
    @Input() img: ImgInterface|undefined;
    @Input() links: LinkInterface[]|undefined;

    logoImgObservable: Observable<string> = of("./assets/imgs/hotequil.webp");
    showLogoImg = false;

    ngOnInit(): void{
        setTimeout(() => this.showLogoImg = true, 1000);
    }
}
