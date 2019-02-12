import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnTrackService } from './ontrack/ontrack.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export default class CartComponent {
  // tslint:disable-next-line:no-inferrable-types
  loaded: boolean = true;
  products: any[];
  private subscription: Subscription;
  _cartService: any;

  constructor(private onTrackService: OnTrackService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
     // this.loaderService.show();
     this.subscription = this.onTrackService.CartState
     .subscribe((state: any) => {
         this.products = state.products;
         console.log(this.products);
     });

}
// tslint:disable-next-line:use-life-cycle-interface
ngOnDestroy() {
 this.subscription.unsubscribe();
}
}
