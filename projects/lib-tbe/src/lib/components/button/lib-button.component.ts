import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-button',
    templateUrl: './lib-button.component.html',
})
export class LibButtonComponent {
    constructor() { }

    @Input() text: string = 'text';
    @Input() color: string = 'primary';
}