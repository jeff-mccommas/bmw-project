import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';
import { RentalComponent } from './rental/rental.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
    RentalComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
