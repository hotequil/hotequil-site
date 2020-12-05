import { Component, Input } from '@angular/core';

@Component({
    selector: 'hotequil-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent{
    @Input() text = '';
    @Input() ariaLabel= this.text;
    @Input() click: any;
    @Input() type = 'button';
    @Input() location: string;
    @Input() target: string;
    @Input() filled: boolean;
}
