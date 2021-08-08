import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { AppService } from './app.service';

describe(AppComponent.name, () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;
    let appService: AppService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({ imports: [AppModule] }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
        appService = TestBed.inject(AppService);
    });

    it('Should create the component when starting the app', () => {
        expect(app).toBeTruthy();
    });

    it(`#${AppComponent.prototype.ngOnInit.name} should be called when starting app`, () => {
        spyOn(app, 'ngOnInit');

        app.ngOnInit();

        expect(app.ngOnInit).toHaveBeenCalled();
    });

    it(`isBrowser should be called when run ngOnInit`, () => {
        const spy = spyOnProperty(appService, 'isBrowser', 'get');

        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });

    it(`#log should print a log with app name when run ngOnInit`, () => {
        const spy = spyOn(console, 'log');

        fixture.detectChanges();

        expect(spy).toHaveBeenCalled();
    });
});
