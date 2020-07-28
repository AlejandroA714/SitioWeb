import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanLoad {

  constructor(public AUTH_SERVICE: AuthService, public ROUTER: Router,public ROUTE: ActivatedRoute) {}
  
  canLoad(): boolean {
    if (!this.AUTH_SERVICE.AUTHENTICATED()) {
      this.ROUTER.navigate(['auth/unathorized']);
      return false;
    }
    return true;
  }
}