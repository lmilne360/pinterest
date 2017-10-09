import { Observable } from 'rxjs/Rx';
import { PinService } from './services/pin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  pins = [];

  constructor(private pinService: PinService) {}

  ngOnInit() {
    this.loadPins();
  }

  loadPins() {
    this.pinService.getPins()
      .subscribe(data => {
        data.forEach((item) => this.pins.push(item));
      });
  }

}
