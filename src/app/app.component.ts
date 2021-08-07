import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'h-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(private appService: AppService){}

    ngOnInit(): void{
        if(this.appService.isBrowser){
            console.log(`


                    /     /      _______                        /
                   /     /         /                         o /
                  /-----/ /-----/ / /-----/ /-----/ /     / / /
                 /     / /     / / /  ___/ /     / /     / / /
                /     / /-----/ / /_____/ /_____/ /_____/ / /
                                               /
                                              /
            `);
        }
    }
}
