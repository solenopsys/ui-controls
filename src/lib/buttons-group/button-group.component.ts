import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActionButton } from "../ui-controls.module";



@Component({
    selector: 'ui-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
    @Input()
    actions!: ActionButton[];

    @Output()
    emmitAction = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit(): void {
    }
}
