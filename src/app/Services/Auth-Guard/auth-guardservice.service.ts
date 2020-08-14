import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthserviceService} from '../Auth/authservice.service';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardserviceService {
  public res: boolean;


  constructor(private auth: AuthserviceService, private router: Router) {
  }

  async canActivate() {
    await this.auth.isLoggedIn().toPromise().then(result => {
      console.log(result);
      this.res = result;
    });
    if (!this.res) {
      this.router.navigateByUrl('/');
      return false;
    } else {
      return true;
    }
  }
}
