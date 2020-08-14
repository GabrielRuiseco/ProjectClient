import {Component, OnInit} from '@angular/core';
import {AuthserviceService, TokenPayload} from '../../../Services/Auth/authservice.service';
import {Router} from '@angular/router';
import {UserDetails} from '../profile/profile.component';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthserviceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile');
      },
      error => {
        console.error(error);
      }
    );
  }
}


