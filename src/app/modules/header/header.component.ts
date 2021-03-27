import { Component, OnInit, Renderer2 } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Link } from '../../shared/models/link/link';
import { Img } from '../../shared/models/img/img';

@Component({
    selector: 'h-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    keyFtSz = 'ftSz';
    keyFilter = 'filter';
    greyVal = 'grayscale(1)';
    invertVal = 'invert(1)';
    htmlEl = document.querySelector('[data-html]');
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

    constructor(private renderer: Renderer2){}

    ngOnInit(): void{
        this.setFtSz(Number(localStorage.getItem(this.keyFtSz)));
        this.setFilter(this.getFilterOnLocalStorage);
        setTimeout(() => this.showLogoImg = true, 1000);
    }

    changeFontSize(val: number): void{
        const ftSz = Number(getComputedStyle(this.htmlEl as HTMLElement).fontSize.replace(/\D/g, ''));
        const finalVal = ftSz + val;

        if(finalVal <= 20 && finalVal >= 12){
            this.setFtSz(finalVal);
            localStorage.setItem(this.keyFtSz, String(finalVal));
        }
    }


    toggleFilter(filter: string): void{
        if(this.getFilterOnLocalStorage === filter) filter = '';

        this.setFilter(filter);
        localStorage.setItem(this.keyFilter, filter);
    }

    get getFilterOnLocalStorage(): string{
        return localStorage.getItem(this.keyFilter) as string;
    }

    private setFilter(filter: string): void{
        this.renderer.removeStyle(this.htmlEl, 'filter');

        setTimeout(() => this.renderer.setStyle(this.htmlEl, 'filter', filter), 100);
    }

    private setFtSz(val: number): void{
        if(val) this.renderer.setStyle(this.htmlEl, 'font-size', `${val}px`);
    }
}
