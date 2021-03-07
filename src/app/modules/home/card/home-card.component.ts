import { Component, Input } from '@angular/core';

import { Link } from '../../../shared/models/link/link';
import { Img } from '../../../shared/models/img/img';

@Component({
    selector: 'h-home-card',
    templateUrl: './home-card.component.html',
    styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent{
    @Input() name: string|undefined;
    @Input() img: Img|undefined;
    @Input() links: Link[]|undefined;
}
