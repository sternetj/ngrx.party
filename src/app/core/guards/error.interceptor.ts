import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/never';

import { catchError } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let additionalMessage = '';

        if (err.status === 400) {
          additionalMessage = 'No bad words are allowed. Please try again.';
        }

        setTimeout(() => alert(`Your request could not be completed. ${additionalMessage}`));

        return Observable.throw(err);
      })
    );
  }

  constructor(private router: Router) { }
}
