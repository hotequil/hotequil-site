import { Component, Input } from '@angular/core';

import { LinkInterface } from '../../link/link.interface';
import { ImageInterface } from '../../image/image.interface';

@Component({
    selector: 'hotequil-home-card',
    templateUrl: './home.card.component.html',
    styleUrls: ['./home.card.component.scss']
})
export class HomeCardComponent{
    @Input() name: string;
    @Input() image: ImageInterface;
    @Input() links: LinkInterface[];
}
