import { Component, Input } from '@angular/core';

@Component({
    selector: 'h-btn',
    templateUrl: './btn.component.html',
    styleUrls: ['./btn.component.scss']
})
export class BtnComponent{
    @Input() txt = '';
    @Input() ariaLabel = '';
    @Input() tooltip = '';
    @Input() active = false;
    @Input() click = () => {};
}
