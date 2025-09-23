import { AuthService } from './../services/auth.service';
import { group, log } from 'console';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputComponent } from '../../../shared/components/input/input.component';

@Component({
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  flag: boolean = true;
  msgError: string = '';
  isLoading: boolean = false;
  // email: FormControl = new FormControl(null, [
  //   Validators.required,
  //   Validators.email,
  // ]);
  //   submit(): void {}
  // }

  registerForm!: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.registerForm = new FormGroup(
      {
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^\w{6,}$/),
        ]),
        rePassword: new FormControl(null, [Validators.required]),
        phone: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^01[0125][0-9]{8}$/),
        ]),
      },
      {
        validators: this.confirmPassword,
      }
    );
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.sendRegisterForm(this.registerForm.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.massage === 'success') {
            setTimeout(() => {
              this.msgError = '';
              this.router.navigate(['/login']);
            }, 1000);
          }

          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.msgError = err.error.message;
          this.isLoading = false;
        },
      }); //{name,email,...}
    } else {
      //show all errors
      // this.registerForm.setErrors({mismatch:true});
      this.registerForm.get('rePassword')?.patchValue('');
      this.registerForm.markAllAsTouched();
    }
  }

  confirmPassword(group: AbstractControl) {
    if (group.get('password')?.value === group.get('rePassword')?.value) {
      return null;
    } else {
      group.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }
}
