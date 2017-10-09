import { Observable } from 'rxjs/Rx';
import { PinService } from './services/pin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // pins: Observable<any[]>;
  pins = [];

  constructor(private pinService: PinService) {
    window.onscroll = () => {
      let status = 'not reached';
      const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body, html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight,
        body.offsetHeight, html.clientHeight,
        html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        status = 'bottom reached';
        this.loadPins();
      }
      console.log(status);
    };
  }

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
