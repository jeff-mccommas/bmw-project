import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {RentalListComponent} from '../rental-list/rental-list.component';
import {RentalListItemComponent} from '../rental-list-item/rental-list-item.component';
import {RentalComponent} from '../rental.component';
import { RentalService } from './rental.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [RentalService],
  declarations: [  RentalListComponent,
    RentalListItemComponent,
    RentalComponent
  ]

})
export class RentalModule { }
