import { Component, Input, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { LinkInterface } from '../../link/link.interface';
import { ImageInterface } from '../../image/image.interface';

@Component({
    selector: 'hotequil-home-card',
    templateUrl: './home.card.component.html',
    styleUrls: ['./home.card.component.scss']
})
export class HomeCardComponent implements OnInit{
    @Input() name: string;
    @Input() image: ImageInterface;
    @Input() links: LinkInterface[];

    logoImageObservable: Observable<string> = of('./assets/images/hotequil.png');
    showLogoImage = false;

    ngOnInit(): void{
        setTimeout(() => this.showLogoImage = true, 1000);
    }
}
