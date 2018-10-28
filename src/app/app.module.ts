import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TempComponent } from './temp/temp.component';
import { RentalComponent } from './rental/rental.component';
import {Routes, RouterModule} from '@angular/router';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';
const  routes: Routes = [
  {path: '', component: RentalComponent},
  {path: 'temp', component: TempComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
