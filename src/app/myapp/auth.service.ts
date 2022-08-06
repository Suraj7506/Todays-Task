import { AuthGuard } from './auth.guard';
import { UserserviceService } from './userservice.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
 

  constructor(private UserService:UserserviceService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.UserService.isuserLoggedIn()){
      return true;
    }
    this.router.navigate(['login'])
    return false;
  }
  }
  





