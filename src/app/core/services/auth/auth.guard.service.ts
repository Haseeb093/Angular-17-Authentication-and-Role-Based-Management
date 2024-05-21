import { Injectable, inject } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn } from '@angular/router';
import { HelperService } from '../helper/helper.service';
import { Menus, Imenu } from '../../../core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard {

  constructor(private router: Router, private helperService: HelperService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.helperService.isUserLoggedIn()) {
      if (!this.checkRoleAssigned(this.helperService.getRole(), state.url.replace("/", ""))) {
        this.router.navigate(['**']);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

  checkRoleAssigned(userRole: string[], routeUrl: string): boolean {
    var isAllowed = false;
    Menus.find((element: Imenu) => element.path == routeUrl)?.roles.find((role: string) => {
      if (userRole.includes(role)) {
        isAllowed = true;
      }
    })
    return isAllowed;
  }
}


export const AuthGuards: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuard).canActivate(next, state);
}
