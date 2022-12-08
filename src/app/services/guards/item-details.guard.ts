import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return !isNaN(Number(route.params['id'])); // walidacja parametru rootingu pozwala uniknąć błedu aplikacji wynikającego z niespodziewanych parametrów przekazywanych do aplikacji
      // w przypadku gdyby np ktoś zedytował parametr recznie w przeglądarce
      // aktywacja routingu = poprawne wyswietlenie komponentu, którey był zadeklarowany jako kontener wylistowanego routa
  }
}
