import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponenteCanDeactivate {
  canDeactivate: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class DatosGuardadosGuard implements CanDeactivate<ComponenteCanDeactivate> {
  canDeactivate(
    component: ComponenteCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
