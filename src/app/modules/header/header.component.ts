import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Link } from '../../shared/models/link/link';
import { Img } from '../../shared/models/img/img';

@Component({
    selector: 'h-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    logoImgObservable: Observable<string> = of("./assets/imgs/hotequil.webp");
    showLogoImg = false;
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

    ngOnInit(): void{
        setTimeout(() => this.showLogoImg = true, 1000);
    }
}
