import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {

  @Input()
  title:string|undefined;

  @Input()
  icon:string|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
