import { Component, Input } from '@angular/core';

@Component({
    selector: 'lib-toolbar',
    templateUrl: './lib-toolbar.component.html',
})
export class LibToolbarComponent {
    constructor() { }

    @Input() title: string = 'App bar';
    @Input() color: string = 'primary';
}