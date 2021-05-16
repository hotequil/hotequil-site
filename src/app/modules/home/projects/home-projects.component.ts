import { Component } from '@angular/core';

import { HomeProjects } from './home-projects';

@Component({
    selector: 'h-home-projects',
    templateUrl: './home-projects.component.html',
    styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent{
    projects: HomeProjects[] = [
        {
            title: 'Lenóra Vitorino',
            desc: `
                Lenóra Vitorino is a website made with Angular.
            `,
            href: 'https://lenora-vitorino.com',
            img: {
                src: './assets/imgs/lenora-vitorino.webp',
                alt: 'Lenóra Vitorino\'s',
            }
        },
        {
            title: 'Artifical Developers',
            desc: `
                Artifical Developers is a simple project, it is
                responsive, accessible
                and uses the BEM methodology for CSS.
            `,
            href: 'https://artificaldevelopers.netlify.app',
            img: {
                src: './assets/imgs/artifical-developers.webp',
                alt: 'Artifical Developers\'s',
            }
        },
        {
            title: 'Diário HZ',
            desc: `
                Diário HZ is a blog that has publications related to freedom,
                anarchism, thoughts and indignations.
            `,
            href: 'https://diariohz.com.br',
            img: {
                src: './assets/imgs/diario-hz.webp',
                alt: 'Diário HZ\'s',
            }
        },
        {
            title: 'FriendBot web page (FIAP)',
            desc: `
                This is a web page of a FIAP project called FriendBot.
            `,
            href: 'https://fiap-friendbot-web-page.netlify.app',
            img: {
                src: './assets/imgs/fiap-friendbot-web-page.webp',
                alt: 'FriendBot\'s web page (FIAP)',
            }
        },
        {
            title: 'HClima',
            desc: `
                HClima is a project that is used to check
                the weather of the day and week, it uses geolocation and
                the HG Weather API.
            `,
            href: 'https://hclima.netlify.app',
            img: {
                src: './assets/imgs/hclima.webp',
                alt: 'HClima\'s',
            }
        },
        {
            title: 'Calculator made with javascript',
            desc: 'This is a simple calculator made with JavaScript.',
            href: 'https://calculatorjavascript.netlify.app',
            img: {
                src: './assets/imgs/calculator-javascript.webp',
                alt: 'Calculator\'s',
            }
        },
        {
            title: 'Eric Cartman',
            desc: 'This is the Eric Cartman drawed with HTML and CSS.',
            href: 'https://eric-cartman.netlify.app',
            img: {
                src: './assets/imgs/eric-cartman.webp',
                alt: 'Eric Cartman\'s',
            }
        },
        {
            title: 'Asteroid game',
            desc: 'This is a game made with HTML and JavaScript.',
            href: 'https://fiap-asteroid-game.netlify.app',
            img: {
                src: './assets/imgs/fiap-asteroid-game.webp',
                alt: 'Asteroid game\'s',
            }
        },
        {
            title: 'Testing UX icons',
            desc: `
                This is a small page to test the user's intuition regarding web application iconography.
            `,
            href: 'https://testing-ux-icons.netlify.app',
            img: {
                src: './assets/imgs/testing-ux-icons.webp',
                alt: 'Testing UX icons\'',
            }
        }
    ];
}
