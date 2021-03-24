import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if (request.method === 'GET' && request.url === 'https://ejemplos-dc1c1.firebaseio.com/tareas-angular/angel.json') {
    //   console.log('PASA POR AQUI')
    //   const tareas = {'shghjagsjd': {titulo: 'Una tarea', completada: false}}

    //   return new Observable((obs) => {
    //     const response = new HttpResponse({
    //       body: tareas,
    //       status: 200,
    //       statusText: 'OK',
    //       headers: request.headers,
    //       url: request.url
    //     });
    //     return obs.next(response);
    //   })
    // }

    return next.handle(request);
  }
}
