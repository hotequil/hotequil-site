import { Component, Input, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Link } from '../../../shared/models/link/link';
import { Img } from '../../../shared/models/img/img';

@Component({
    selector: 'h-home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent implements OnInit{
    @Input() name: string|undefined;
    @Input() img: Img|undefined;
    @Input() links: Link[]|undefined;

    logoImgObservable: Observable<string> = of("./assets/imgs/hotequil.webp");
    showLogoImg = false;

    ngOnInit(): void{
        setTimeout(() => this.showLogoImg = true, 1000);
    }
}
