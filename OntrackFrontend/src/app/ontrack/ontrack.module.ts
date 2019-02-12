import { SearchComponent } from './../components/search/search.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatLabel } from '@angular/material';
import { CardComponent } from '../components/card/card.component';
import { OntrackMaterialModule } from './ontrack.material.module';
import CartComponent from '../components/cart/cart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, CardComponent, SearchComponent, CartComponent],
  imports: [
    CommonModule,
    MatCardModule,
    OntrackMaterialModule,
    OntrackModule
  ],
  exports: [HomeComponent, CardComponent, SearchComponent, CartComponent]
})
export class OntrackModule { }
