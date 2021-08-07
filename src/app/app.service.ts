import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    private readonly isBrowserPlatform: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: string){
        this.isBrowserPlatform = isPlatformBrowser(platformId);
    }

    get isBrowser(): boolean{
        return this.isBrowserPlatform;
    }
}
