import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scroller',
  template: ` <div *ngIf="reached">Loading more pins...</div>`
})
export class ScrollerComponent implements OnInit {
  @Output() bottomReached = new EventEmitter<string>();
  reached: boolean;

  constructor() {
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
        this.reached = true;
        this.bottomReached.emit(status);
      } else {this.reached = false; }
      console.log(status);
    };
   }

  ngOnInit() {
  }

}
