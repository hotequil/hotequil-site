import { Component } from '@angular/core';

import { HomeProjectsInterface } from './home.projects.interface';

@Component({
    selector: 'hotequil-home-projects',
    templateUrl: './home.projects.component.html',
    styleUrls: ['./home.projects.component.scss']
})
export class HomeProjectsComponent{
    projects: HomeProjectsInterface[] = [
        {
            title: 'Artifical Developers',
            description: 'Artifical Developers is a simple project, it is responsive, accessible and uses the BEM methodology for CSS.',
            location: 'https://artificaldevelopers.netlify.app',
            image: {
                source: './assets/images/artifical-developers.png',
                alternative: 'Artifical Developers\'s image',
            }
        },
        {
            title: 'Diário HZ',
            description: 'Diário HZ is a blog that has publications related to freedom, anarchism, thoughts and indignations.',
            location: 'https://diariohz.com.br',
            image: {
                source: './assets/images/diario-hz.png',
                alternative: 'Diário HZ\'s image',
            }
        },
        {
            title: 'HClima',
            description: 'HClima is a project that is used to check the weather of the day and week, it uses geolocation and the HG Weather API.',
            location: 'https://hclima.netlify.app',
            image: {
                source: './assets/images/hclima.png',
                alternative: 'HClima\'s image',
            }
        },
        {
            title: 'Calculator made with javascript',
            description: 'This is a simple calculator made with JavaScript.',
            location: 'https://calculatorjavascript.netlify.app',
            image: {
                source: './assets/images/calculator-javascript.png',
                alternative: 'Calculator\'s image',
            },
            withoutName: true
        },
        {
            title: 'Eric Cartman',
            description: 'This is the Eric Cartman drawed with HTML and CSS.',
            location: 'https://eric-cartman.netlify.app',
            image: {
                source: './assets/images/eric-cartman.png',
                alternative: 'Eric Cartman\'s image',
            }
        }
    ];
}
