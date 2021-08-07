import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { FooterModule } from './footer.module';

describe(FooterComponent.name, () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [FooterModule] }).compileComponents();

        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component when starting the app', () => {
        expect(component).toBeTruthy();
    });
});
