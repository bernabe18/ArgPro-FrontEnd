import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './../../service/token.service';

@Injectable({
    providedIn:'root'
})
export class InterceptorService {

    constructor(private tokenService:TokenService){}

    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let intRequest=request;
        const token=this.tokenService.getToken();
        if(token!=null){
            intRequest=request.clone({
                headers:request.headers.set('Authorization','beare'+token)
            });
        }
        return next.handle(intRequest);
    }
}
export const interceptorProvide=[{
    provide: HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
}];
