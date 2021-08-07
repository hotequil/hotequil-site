import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectsComponent } from './home-projects.component';
import { HomeModule } from '../home.module';

describe(HomeProjectsComponent.name, () => {
    let component: HomeProjectsComponent;
    let fixture: ComponentFixture<HomeProjectsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HomeModule] }).compileComponents();

        fixture = TestBed.createComponent(HomeProjectsComponent);
        component = fixture.componentInstance;
    });

    it('Should create component when starting the app', () => {
        expect(component).toBeTruthy();
    });
});
