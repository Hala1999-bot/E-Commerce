// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AllordersService {

// }
// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../../environments/environment.development';

// @Injectable({
//   providedIn: 'root',
// })
// export class OrdersService {
//   private readonly httpClient = inject(HttpClient);

//   getAllOrders(): Observable<any> {
//     return this.httpClient.get(environment.baseUrl + 'orders');
//   }
// }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);

  private get myHeaders() {
    return {
      headers: new HttpHeaders({
        token: this.cookieService.get('token'), // هنا بنبعت التوكن
      }),
    };
  }

  getAllOrders(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'orders', this.myHeaders);
  }
}
