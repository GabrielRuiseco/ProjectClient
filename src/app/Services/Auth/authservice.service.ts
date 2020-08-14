import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private token: string;
  // tslint:disable-next-line:ban-types
  private state: Object;

  constructor(private http: HttpClient, private router: Router) {
  }

  private saveToken(token: string): void {
    localStorage.setItem('userToken', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('usertoken');
    }
    return this.token;
  }

  public getUserDetails(): Observable<any> {
    return this.http.get('emp/loggedIn');
  }

  public isLoggedIn(): Observable<any> {
    return this.http.get('emp/loginCheck');
  }

  public navItems(): boolean {
    if (this.state) {
      return true;
    } else {
      return false;
    }
  }

  public register(user: TokenPayload): Observable<any> {
    return this.http.post(`/emp/register`, user);
  }

  public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`/emp/login`, user);

    return base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
          this.state = true;
        }
      })
    );
  }

  public profile(id): Observable<any> {
    return this.http.get(`/emp/getuser/${id}`);
  }

  public logout(): void {
    this.state = false;
    this.token = '';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
