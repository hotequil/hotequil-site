import { Component } from '@angular/core';

import { ImageInterface } from '../../image/image.interface';
import { LinkInterface } from '../../link/link.interface';

@Component({
    selector: 'hotequil-home-head',
    templateUrl: './home.head.component.html',
    styleUrls: ['./home.head.component.scss']
})
export class HomeHeadComponent{
    name = 'João Paulo Hotequil';
    image: ImageInterface = { source: './assets/images/logo.svg', alternative: 'João Paulo Hotequil\'s image' };
    links: LinkInterface[] = [
        {
            text: 'Curriculum',
            location: './assets/documents/curriculum.pdf',
            target: '_blank'
        },
        {
            text: 'Email',
            location: 'mailto:hotequil@protonmail.com',
            target: '_self',
        },
        {
            text: 'LinkedIn',
            location: 'https://www.linkedin.com/in/joao-paulo-hotequil',
            target: '_blank'
        },
        {
            text: 'GitHub',
            location: 'https://github.com/hotequil',
            target: '_blank'
        },
        {
            text: 'LBRY',
            location: 'https://lbry.tv/@hotequil',
            target: '_blank'
        },
        {
            text: 'Twitter',
            location: 'https://twitter.com/joaohotequil',
            target: '_blank',
        },
    ];
    buttons: LinkInterface[] = [];
}
