import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storageServ: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.storageServ.getToken();
    const requestConToken = request.clone({
      headers: request.headers.set('Authorization', token)
    })
    // return next.handle(request);
    return next.handle(requestConToken);
  }
}
