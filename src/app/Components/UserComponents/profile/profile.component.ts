import {Component, OnInit} from '@angular/core';
import {AuthserviceService} from '../../../Services/Auth/authservice.service';
import {AuthGuardserviceService} from '../../../Services/Auth-Guard/auth-guardservice.service';

export interface UserDetails {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  exp: number;
  iat: number;
  uid: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;

  constructor(private auth: AuthserviceService) {
  }

  ngOnInit(): void {
    this.auth.getUserDetails().subscribe(data => (
        this.auth.profile(data.id).subscribe(
          user => {
            this.details = user;
          },
          error => {
            console.error(error);
          }
        )
      )
    );
  }
}
