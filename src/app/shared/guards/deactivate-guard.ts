import { CanDeactivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree } from "@angular/router";

export class DeactivateGuard implements CanDeactivate<any> {

  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | UrlTree | import("rxjs").Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

      return component ? component.canDeactivate(currentRoute, currentState, nextState) : true;
  }

}
