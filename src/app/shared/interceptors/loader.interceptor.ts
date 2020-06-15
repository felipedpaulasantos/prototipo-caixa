import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "../../../../node_modules/@angular/common/http";
import { NgxSpinnerService } from "../../../../node_modules/ngx-spinner";
import { Observable } from "../../../../node_modules/rxjs";
import { finalize, tap, catchError } from "../../../../node_modules/rxjs/operators";
import { Injectable as Injectable_1 } from "@angular/core";

@Injectable_1()
export class LoaderInterceptor implements HttpInterceptor {

    private totalRequests = 0;

    constructor(public spinner: NgxSpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.totalRequests++;
        this.spinner.show();
        return next.handle(req).pipe(
            tap(res => {
                if (res instanceof HttpResponse) {
                    this.decreaseRequests();
                }
            }),
            catchError(err => {
                this.decreaseRequests();
                throw err;
            })
        );
    }

    private decreaseRequests() {
        this.totalRequests--;
        if (this.totalRequests === 0) {
            this.spinner.hide();
        }
    }
}
