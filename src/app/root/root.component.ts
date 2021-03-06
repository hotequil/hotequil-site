import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'h-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit{
    ngOnInit(): void{
        console.log('Freedom.');
    }
}
