import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  @Input()
  pin: any;
  large: false;
  constructor() { }

  ngOnInit() {
  }

}
