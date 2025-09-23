import { error } from 'node:console';
import { ToastrService } from 'ngx-toastr';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);
  return next(req).pipe(
    catchError((err) => {
      toastrService.error(err.error.massage);
      return throwError(() => err);
    })
  );
};
