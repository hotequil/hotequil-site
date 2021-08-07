import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HeaderModule } from './header.module';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [HeaderModule] }).compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component when starting app', () => {
        expect(component).toBeTruthy();
    });

    it('Should show logo when 1000ms when onInit was called', done => {
        fixture.detectChanges();

        setTimeout(() => {
            expect(component.showLogoImg).toBeTrue();

            done();
        }, 1000);
    });

    it('Should has HTML Element when onInit was called', () => {
        fixture.detectChanges();

        expect(component.htmlEl?.tagName === "HTML").toBeTrue();
    });

    it('Should show buttons when onInit was called', () => {
        fixture.detectChanges();

        expect(component.showBtns).toBeTrue();
    });
});
