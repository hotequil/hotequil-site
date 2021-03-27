import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Link } from '../../shared/models/link/link';
import { Img } from '../../shared/models/img/img';
import { isPlatformBrowser } from '@angular/common';
import { Btn } from '../../shared/models/btn/btn';

@Component({
    selector: 'h-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    showBtns =  false;
    isBrowser =  false;
    keyFtSz = 'ftSz';
    keyFilter = 'filter';
    greyVal = 'grayscale(1)';
    invertVal = 'invert(1)';
    htmlEl: HTMLElement|null = null;
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

    btns: Btn[] = [
        {
            txt: 'A+',
            ariaLabel: 'Aumentar tamanho de fonte',
            click: () => this.changeFontSize(1),
            active: () => false
        },
        {
            txt: 'A-',
            ariaLabel: 'Diminuir tamanho de fonte',
            click: () => this.changeFontSize(-1),
            active: () => false
        },
        {
            txt: 'Alto contraste',
            ariaLabel: 'Alto contraste',
            click: () => this.toggleFilter(this.greyVal),
            active: () => this.greyVal === this.getFilterOnLocalStorage
        },
        {
            txt: 'Inverter cores',
            ariaLabel: 'Inverter cores',
            click: () => this.toggleFilter(this.invertVal),
            active: () => this.invertVal === this.getFilterOnLocalStorage
        }
    ];

    constructor(@Inject(PLATFORM_ID) platformId: string, private renderer: Renderer2) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void{
        if(this.isBrowser){
            this.showBtns = true;
            this.htmlEl = document.querySelector('[data-html]');
        }

        this.setFtSz(Number(localStorage.getItem(this.keyFtSz)));
        this.setFilter(this.getFilterOnLocalStorage);

        setTimeout(() => this.showLogoImg = true, 1000);
    }

    private changeFontSize(val: number): void{
        const ftSz = Number(getComputedStyle(this.htmlEl as HTMLElement).fontSize.replace(/\D/g, ''));
        const finalVal = ftSz + val;

        if(finalVal <= 20 && finalVal >= 12){
            this.setFtSz(finalVal);
            localStorage.setItem(this.keyFtSz, String(finalVal));
        }
    }

    private toggleFilter(filter: string): void{
        if(this.getFilterOnLocalStorage === filter) filter = '';

        this.setFilter(filter);
        localStorage.setItem(this.keyFilter, filter);
    }

    private get getFilterOnLocalStorage(): string{
        return localStorage.getItem(this.keyFilter) as string;
    }

    private setFilter(filter: string): void{
        if (this.isBrowser) {
            this.renderer.removeStyle(this.htmlEl, 'filter');

            setTimeout(() => this.renderer.setStyle(this.htmlEl, 'filter', filter), 100);
        }
    }

    private setFtSz(val: number): void{
        if (this.isBrowser && val) {
            this.renderer.setStyle(this.htmlEl, 'font-size', `${val}px`);
        }
    }
}
