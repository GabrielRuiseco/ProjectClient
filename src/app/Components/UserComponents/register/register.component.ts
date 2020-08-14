import { Component, OnInit } from '@angular/core';
import {AuthserviceService, TokenPayload} from '../../../Services/Auth/authservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  Register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      error => {
        console.error(error);
      }
    );
  }
}
