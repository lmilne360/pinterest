import { HttpModule } from '@angular/http';
import { PinService } from './services/pin.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PinComponent } from './pin/pin.component';

@NgModule({
  declarations: [
    AppComponent,
    PinComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [PinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
