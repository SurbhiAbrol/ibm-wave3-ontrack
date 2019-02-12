import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OntrackModule } from './ontrack/ontrack.module';
import { SearchComponent } from './components/search/search.component';
import CartComponent from './components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OntrackModule,
    CartComponent
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
