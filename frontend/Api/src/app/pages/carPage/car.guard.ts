import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CurrentUserService } from 'src/app/services/domain/auth/current-user/current-user.service';

@Injectable()
export class CarGuard implements CanActivate {
  constructor(
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const hasRole = this.currentUserService.isAuthorized();
    if (hasRole) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
