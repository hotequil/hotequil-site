import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponent } from './btn.component';
import { BtnModule } from './btn.module';

describe(BtnComponent.name, () => {
    let component: BtnComponent;
    let fixture: ComponentFixture<BtnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [BtnModule] }).compileComponents();

        fixture = TestBed.createComponent(BtnComponent);
        component = fixture.componentInstance;
    });

    it('Should create the component when starting app', () => {
        expect(component).toBeTruthy();
    });

    it(`Set input properties when start the component`, () => {
        fixture.detectChanges();

        const setValues: any[] = ['Button', 'Open a dialog', 'Open the dialog', true, 'Dialog'];

        component.txt = setValues[0];
        component.ariaLabel = setValues[1];
        component.tooltip = setValues[2];
        component.active = setValues[3];
        component.click = () => setValues[4];

        const inputPropertiesValues: any[] = [component.txt, component.ariaLabel, component.tooltip, component.active, component.click()];

        inputPropertiesValues.forEach((item: any, index: number) => {
            const value = setValues[index];

            expect(item === value).withContext(`Different value: ${item} and ${value}`).toBeTrue();
        });
    });
});
