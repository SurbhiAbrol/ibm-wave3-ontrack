
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class OnTrackService {
  constructor(private httpclient: HttpClient) {}
  private cartSubject = new Subject<any>();
    Products: any[] = [];
    CartState = this.cartSubject.asObservable();
    addProduct(_product: any) {
      console.log('in service');
      this.Products.push(_product);
      this.cartSubject.next(<any>{loaded: true, products:  this.Products});
    }
    removeProduct(id: number) {
      this.Products = this.Products.filter((_item) =>  _item.id !== id );
      this.cartSubject.next(<any>{loaded: false , products:  this.Products});
    }

  getAllProducts(): Observable <any> {
    return this.httpclient.get('https://www.flipkart.com/viewcart?otracker=PP_GoToCart');
     // .catch((error: any) => Observable.throw('Server error'));
    // tslint:disable-next-line:quotemark
    return this .httpclient.get("");
}
}
