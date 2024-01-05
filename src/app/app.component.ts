import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
    selector: 'h-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    private primaryColor = '#0078c2';
    private whiteColor = '#fefefe';

    constructor(private appService: AppService){}

    ngOnInit(): void{
        if(this.appService.isBrowser){
console.log(`%c                                                         
                                                         
        /     /      _______                        /    
       /     /         /                         o /     
      /-----/ /-----/ / /-----/ /-----/ /     / / /      
     /     / /     / / /  ___/ /     / /     / / /       
    /     / /-----/ / /_____/ /_____/ /_____/ / /        
                                   /                     
                                  /                      
                                                         
                                                         `,
`background-color: ${this.primaryColor}; color: ${this.whiteColor}`);
        }
    }
}
