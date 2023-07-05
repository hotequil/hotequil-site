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
            title: 'Mechanize',
            desc: 'Mechanize is an app to connect drivers with mechanics.',
            href: 'https://play.google.com/store/apps/details?id=com.mechanize',
            img: {
                src: './assets/imgs/mechanize.webp',
                alt: 'Mechanize\'s'
            }
        },
        {
            title: 'Casulo Social',
            desc: 'Stock management system for Casulo Social (NGO) made with Flask (Python), Oracle DB, Angular, Netlify and Railway.',
            href: 'https://sistema-de-estoque-projeto-casulo.netlify.app',
            img: {
                src: './assets/imgs/casulo-social.webp',
                alt: 'Casulo Social\'s'
            }
        },
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
            title: 'Angular with Service Worker and Web Notification',
            desc: `This is a project to create notifications using Angular, Service Worker and Web Notification.`,
            href: 'https://angular-sw-web-notification.netlify.app',
            img: {
                src: './assets/imgs/ng-sw-web-notification.webp',
                alt: 'Web Notification\'s project',
            }
        },
        {
            title: 'Items application',
            desc: `
                This project is for create items with Angular using LocalStorage,
                Material Design, responsive and reusable features application.
            `,
            href: 'https://items-application.netlify.app',
            img: {
                src: './assets/imgs/items-application.webp',
                alt: 'Items application\'s project',
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
            title: 'FriendBot system (FIAP)',
            desc: 'System for managing FriendBot publications.',
            href: 'https://github.com/tech-warriors-corporation/friendbot-system',
            img: {
                src: './assets/imgs/friendbot-system.webp',
                alt: 'FriendBot\'s system (FIAP)'
            }
        },
        {
            title: 'FriendBot robot (FIAP)',
            desc: `Merlin is a robot in FriendBot.`,
            href: 'https://odysee.com/@hotequil:7/robo-merlin:4',
            img: {
                src: './assets/imgs/merlin.webp',
                alt: 'FriendBot\'s robot (FIAP)',
            }
        },
        {
            title: 'Game for FriendBot project (FIAP)',
            desc: `
                The game is based on the king Arthur cartoon, contains progress, challenges, cutscenes, manual and much more.
            `,
            href: 'https://em-busca-da-coroa.netlify.app',
            img: {
                src: './assets/imgs/game-for-friend-bot-project.webp',
                alt: 'FriendBot\'s game (FIAP)',
            }
        },
        {
            title: 'Arduino irrigation system',
            desc: `Irrigation system using Arduino for my vegetable garden.`,
            href: 'https://github.com/hotequil/arduino-irrigation-system',
            img: {
                src: './assets/imgs/arduino-irrigation-system.webp',
                alt: 'Arduino irrigation system\'s',
            }
        },
        {
            title: 'Photos gallery',
            desc: `Photos gallery consumes an API and has dark and light theme, made with React, TypeScript, SCSS, Vite and Netlify.`,
            href: 'https://photos-gallery-hotequil.netlify.app',
            img: {
                src: './assets/imgs/photos-gallery.webp',
                alt: 'Photos gallery',
            }
        },
        {
            title: 'Dodone',
            desc: `Dodone is a to do list created with React, TypeScript and LocalStorage.`,
            href: 'https://dodone-tasks.netlify.app',
            img: {
                src: './assets/imgs/dodone.webp',
                alt: 'Dodone\'s',
            }
        },
        {
            title: 'Costgements',
            desc: `Costgements is a repository to create projects using ReactJS.`,
            href: 'https://github.com/hotequil/costgements',
            img: {
                src: './assets/imgs/costgements.webp',
                alt: 'Costgements\'',
            }
        },
        {
            title: 'Beers',
            desc: `Beers is a simple CRUD with PHP.`,
            href: 'https://github.com/hotequil/beers',
            img: {
                src: './assets/imgs/beers.webp',
                alt: 'Beers\'',
            }
        },
        {
            title: 'Fullbranas',
            desc: `Rodrigo Branas video series about VueJS, NodeJS and GraphQL resulted in this domain generation application.`,
            href: 'https://github.com/fullbranas',
            img: {
                src: './assets/imgs/fullbranas.webp',
                alt: 'Fullbranas\'',
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
            title: 'Asteroid game (FIAP)',
            desc: 'This is a game made with HTML and JavaScript for a FIAP activity.',
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
