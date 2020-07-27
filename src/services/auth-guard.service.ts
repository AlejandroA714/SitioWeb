import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public AUTH_SERVICE: AuthService, public ROUTER: Router) {}
  
  canActivate(): boolean {
    if (!this.AUTH_SERVICE.AUTHENTICATED()) {
      this.ROUTER.navigate(['/auth/unathorized']);
      return false;
    }
    return true;
  }
}