import { Component, Input } from '@angular/core';

@Component({
    selector: 'h-btn',
    templateUrl: './btn.component.html',
    styleUrls: ['./btn.component.scss']
})
export class BtnComponent{
    @Input() txt = '';
    @Input() active = false;
    @Input() click = () => {};
}
