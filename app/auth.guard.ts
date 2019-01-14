import {Injectable} from "@angular/core";
import {CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot} from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate
{
    public canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
    {
        if(sessionStorage.getItem("AUTH-TOKEN")!=null)
    {
        return true;
    }
    else{
        location.href="/home?returnUrl="+state.url;
        return false;
    }
    
  }
}