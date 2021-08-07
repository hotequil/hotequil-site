import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe(AppService.name, () => {
    let service: AppService;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.inject(AppService);
    });

    it(`isBrowser should return a boolean when was called`, () => {
        const value = service.isBrowser;

        expect(typeof(value) === 'boolean').toBeTrue();
    });

    it('Should create the service when starting the app', () => {
        expect(service).toBeTruthy();
    });
});
