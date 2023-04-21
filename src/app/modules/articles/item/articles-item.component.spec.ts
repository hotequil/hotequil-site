import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesItemComponent } from './articles-item.component';

describe('ArticlesItemComponent', () => {
    let component: ArticlesItemComponent;
    let fixture: ComponentFixture<ArticlesItemComponent>;

    beforeEach(async () => await TestBed.configureTestingModule({ declarations: [ArticlesItemComponent] }).compileComponents());

    beforeEach(() => {
        fixture = TestBed.createComponent(ArticlesItemComponent);
        component = fixture.componentInstance;

        component.article = {
            name: "Improve your application performance in Angular (3 tips)",
            link: "./assets/articles/angular-improve-performance.pdf",
            date: new Date()
        };

        fixture.detectChanges();
    });

    it('Should create the component', () => expect(component).toBeTruthy());
});
