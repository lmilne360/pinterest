import { HttpModule } from '@angular/http';
import { PinService } from './services/pin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PinComponent } from './pin/pin.component';
import { ScrollerComponent } from './scroller/scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    PinComponent,
    ScrollerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
