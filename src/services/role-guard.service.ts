import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';

@Injectable(
  {providedIn:'root'}
)
export class RoleGuardService implements CanActivate {

  constructor(public AUTH_SERVICE: AuthService, public ROUTER: Router) {}
  
  canActivate(ROUTE: ActivatedRouteSnapshot): boolean {

    const expectedRole = ROUTE.data.expectedRole;

    const TOKEN = this.AUTH_SERVICE.accessToken();
  
    const TOKEN_PAYLOAD = decode(TOKEN);

    if ( !this.AUTH_SERVICE.AUTHENTICATED() || TOKEN_PAYLOAD.identity.Tipo !== expectedRole ) 
    {
      this.ROUTER.navigateByUrl('app/unathorized');
      return false;
    }
    return true;
  }
}