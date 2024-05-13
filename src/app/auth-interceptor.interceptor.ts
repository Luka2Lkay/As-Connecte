import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResellerService } from 'src/services/reseller.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

  constructor(private _resellerService: ResellerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
      const token = this._resellerService.getToken();

      if(!token){
          return next.handle(req);
      }

      const authRequest = req.clone({
          headers: req.headers.set("x-access-token", token)
      })
      return next.handle(authRequest);
  }
}