import {
  HttpErrorResponse,
  HttpInterceptorFn,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { RequestCacheService } from '../services/request-cache.service';
import { catchError, of, tap, throwError } from 'rxjs';

export const requestCacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cacheService = inject(RequestCacheService);

  const key = req.url;
  const cachedResponse = cacheService.getResponse(key);

  if (cachedResponse instanceof HttpErrorResponse) {
    return throwError(() => cachedResponse);
  }

  if (cachedResponse instanceof HttpResponse) {
    return of(cachedResponse);
  }

  return next(req).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        cacheService.setResponse(key, event);
      }
    }),
    catchError((error) => {
      if (error instanceof HttpErrorResponse) {
        cacheService.setResponse(key, error);
      }

      return throwError(() => error);
    })
  );
};
