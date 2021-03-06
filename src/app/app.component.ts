import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'h-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    ngOnInit(): void{
        console.log('Freedom.');
    }
}
