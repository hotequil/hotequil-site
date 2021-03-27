import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'h-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    ngOnInit(): void{
        console.log('Freedom.');
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
