import { Component } from '@angular/core';

import { Article } from "../../shared/models/articles/article";

@Component({
    selector: 'h-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
    list: Article[] = [
        {
            name: "Talk about Web Accessibility with Camila Bueno for Performa_IT (pt-BR)",
            link: "./assets/articles/talk-about-web-accessibility-with-camila-bueno-for-performa-it.pdf",
            date: new Date(2024, 1, 16)
        },
        {
            name: "Without security there is no economy (pt-BR)",
            link: "https://cypherpunks.com.br/documentos/sem-seguranca-nao-ha-economia",
            date: new Date(2024, 0, 2)
        },
        {
            name: "Respect your work, buy gold (pt-BR)",
            link: "https://cypherpunks.com.br/documentos/respeite-seu-trabalho-compre-ouro",
            date: new Date(2023, 1, 5)
        },
        {
            name: "Three tips to improve your application performance in Angular (pt-BR)",
            link: "./assets/articles/angular-improve-performance.pdf",
            date: new Date(2022, 0, 10)
        },
    ];
}
