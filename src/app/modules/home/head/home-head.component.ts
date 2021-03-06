import { Component } from '@angular/core';

import { Img } from '../../../shared/models/img/img';
import { Link } from '../../../shared/models/link/link';

@Component({
    selector: 'h-home-head',
    templateUrl: './home-head.component.html',
    styleUrls: ['./home-head.component.scss']
})
export class HomeHeadComponent{
    name = 'João Paulo Hotequil';
    img: Img = { src: './assets/imgs/logo.svg', alt: 'João Paulo Hotequil\'s img' };
    links: Link[] = [
        {
            text: 'Curriculum',
            href: './assets/docs/curriculum.pdf',
            target: '_blank'
        },
        {
            text: 'Email',
            href: 'mailto:hotequil@protonmail.com',
            target: '_self',
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/joao-paulo-hotequil',
            target: '_blank'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/hotequil',
            target: '_blank'
        },
        {
            text: 'LBRY',
            href: 'https://lbry.tv/@hotequil',
            target: '_blank'
        },
        {
            text: 'Twitter',
            href: 'https://twitter.com/joaohotequil',
            target: '_blank',
        },
    ];
    buttons: Link[] = [];
}
