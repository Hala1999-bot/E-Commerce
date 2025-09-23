// import { CookieService } from 'ngx-cookie-service';
// import { HttpClient } from '@angular/common/http';
// import { inject, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../../../environments/environment.development';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private readonly httpClient = inject(HttpClient);
//   private readonly cookieService = inject(CookieService);
//   private readonly router = inject(Router);
//   sendRegisterForm(data: object): Observable<any> {
//     return this.httpClient.post(environment.baseUrl + 'auth/signup', data);
//   }
//   sendLoginForm(data: object): Observable<any> {
//     return this.httpClient.post(environment.baseUrl + 'auth/signin', data);
//   }
//   logOut(): void {
//     this.cookieService.delete('token');
//     this.router.navigate(['/login']);
//   }
// }

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../environments/environment.development';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly cookieService = inject(CookieService);
  private readonly router = inject(Router);

  // 🔹 تسجيل مستخدم جديد
  sendRegisterForm(data: object): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'auth/signup', data);
  }

  // 🔹 تسجيل الدخول وتخزين الـ token في الكوكي
  sendLoginForm(data: object): Observable<any> {
    return this.httpClient
      .post<{ token: string }>(environment.baseUrl + 'auth/signin', data)
      .pipe(
        tap((res) => {
          if (res.token) {
            this.cookieService.set(
              'token',
              res.token,
              7, // صلاحية 7 أيام
              '/', // path
              undefined, // domain (سيبه undefined في localhost)
              false, // secure=false عشان تشتغل على http
              'Lax' // SameSite
            );
          }
        })
      );
  }

  // 🔹 جلب التوكن من الكوكي
  getToken(): string {
    return this.cookieService.get('token');
  }

  // 🔹 تسجيل الخروج
  logOut(): void {
    this.cookieService.delete('token', '/');
    this.router.navigate(['/login']);
  }
  submitVerifyEmail(data: object): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + `auth/forgotPasswords`,
      data
    );
  }
  submitVerifyCode(data: object): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + `auth/verifyResetCode`,
      data
    );
  }
  submitResetPassword(data: object): Observable<any> {
    return this.httpClient.put(
      environment.baseUrl + `auth/resetPasswords`,
      data
    );
  }

  decodeToken() {
    let token;
    try {
      token = jwtDecode(this.cookieService.get('token'));
    } catch (error) {
      this.logOut();
    }
    return token;
  }
}
