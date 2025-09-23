// import { environment } from './../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, NgProbeToken } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { count } from 'node:console';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);
  // myOptions: object = {
  //   headers: {
  //     token: this.cookieService.get('token'),
  //   },
  // myHeaders: object = {
  //   headers: {
  //     token: this.cookieService.get('token'),
  //   },
  // };
  addProductToCart(id: string): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + 'cart',
      {
        productId: id,
      }
      // this.myHeaders
    );
  }

  getLoggedUserCart(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'cart');
  }

  removeSpecificCartItem(id: string): Observable<any> {
    return this.httpClient.delete(
      environment.baseUrl + `cart/${id}`
      // this.myHeaders
    );
  }

  updateCartCount(id: string, count: number): Observable<any> {
    return this.httpClient.put(
      environment.baseUrl + `cart/${id}`,
      {
        count: count,
      }
      // this.myHeaders
    );
  }
  checkOutSession(id: string | null, data: object): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl +
        `orders/checkout-session/${id}?url=http://localhost:4200`,
      data
      // this.myHeaders
    );
  }
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root' // معناها إن الخدمة دي متوفرة على مستوى التطبيق كله
// })
// export class CartService {

//   private items: any[] = [];

//   constructor() {}

//   // إضافة منتج للعربة
//   addToCart(product: any) {
//     this.items.push(product);
//   }

//   // جلب كل المنتجات
//   getItems() {
//     return this.items;
//   }

//   // مسح العربة
//   clearCart() {
//     this.items = [];
//     return this.items;
//   }
// }
