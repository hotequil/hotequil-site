import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMessageComponent } from './home-message.component';
import { HomeModule } from '../home.module';

describe(HomeMessageComponent.name, () => {
    let component: HomeMessageComponent;
    let fixture: ComponentFixture<HomeMessageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HomeModule] }).compileComponents();

        fixture = TestBed.createComponent(HomeMessageComponent);
        component = fixture.componentInstance;
    });

    it('Should create component when starting app', () => {
        expect(component).toBeTruthy();
    });
});
