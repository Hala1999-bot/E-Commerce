// import { CookieService } from 'ngx-cookie-service';
// import { AuthService } from './../services/auth.service';
// import { group, log } from 'console';
// import { Component, inject, OnInit } from '@angular/core';
// import {
//   AbstractControl,
//   FormBuilder,
//   FormControl,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { Router } from '@angular/router';
// import { InputComponent } from '../../../shared/components/input/input.component';
// import { Subscription } from 'rxjs';
// @Component({
//   selector: 'app-register',
//   imports: [ReactiveFormsModule, InputComponent],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css',
// })
// export class LoginComponent implements OnInit {
//   private readonly authService = inject(AuthService);
//   private readonly router = inject(Router);
//   private readonly fb = inject(FormBuilder);
//   private readonly CookieService = inject(CookieService);

//   subscription: Subscription = new Subscription();

//   msgError: string = '';
//   isLoading: boolean = false;
//   // email: FormControl = new FormControl(null, [
//   //   Validators.required,
//   //   Validators.email,
//   // ]);
//   //   submit(): void {}
//   // }

//   loginForm!: FormGroup;
//   cookieService: any;
//   ngOnInit(): void {
//     this.initForm();
//   }
//   initForm(): void {
//     this.loginForm = new FormGroup({
//       email: new FormControl(null, [Validators.required, Validators.email]),
//       password: new FormControl(null, [
//         Validators.required,
//         Validators.pattern(/^\w{6,}$/),
//       ]),
//     });
//   }
//   submitForm(): void {
//     if (this.loginForm.valid) {
//       this.subscription.unsubscribe();
//       this.isLoading = true;
//       this.subscription = this.authService
//         .sendLoginForm(this.loginForm.value)
//         .subscribe({
//           next: (res) => {
//             console.log(res);
//             if (res.message === 'success') {
//               this.cookieService.set('token', res.token);
//               console.log('Login response:', res);

//               this.router.navigate(['/home']);
//             }

//             this.isLoading = false;
//           },
//           error: (err) => {
//             console.log(err);
//             this.msgError = err.error.message;
//             this.isLoading = false;
//           },
//         }); //{name,email,...}
//     }
//   }
// }

import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true, // ✅ لو بتستخدمي Standalone Components
  imports: [ReactiveFormsModule, InputComponent, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  // ✅ Inject services
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly cookieService = inject(CookieService);

  subscription: Subscription = new Subscription();
  msgError: string = '';
  isLoading: boolean = false;

  // ✅ form group
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  // ✅ إعداد الفورم
  initForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w{6,}$/), // أي 6 حروف/أرقام أو أكتر
      ]),
    });
  }

  // ✅ عند الضغط على زرار Login
  submitForm(): void {
    if (this.loginForm.valid) {
      this.subscription.unsubscribe();
      this.isLoading = true;

      this.subscription = this.authService
        .sendLoginForm(this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log('Login response:', res);

            if (res.message === 'success' && res.token) {
              // تخزين التوكن في الكوكي
              this.cookieService.set('token', res.token, 7, '/');
              console.log(this.authService.decodeToken());
              // تحويل لصفحة الـ Home
              this.router.navigate(['/home']);
            }

            this.isLoading = false;
          },
          error: (err) => {
            console.error('Login error:', err);
            this.msgError = err.error?.message || 'Login failed';
            this.isLoading = false;
          },
        });
    }
  }
}
