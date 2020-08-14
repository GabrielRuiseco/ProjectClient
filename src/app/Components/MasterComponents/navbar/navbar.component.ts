import {Component, OnInit} from '@angular/core';
import {AuthserviceService} from '../../../Services/Auth/authservice.service';
import {AuthGuardserviceService} from '../../../Services/Auth-Guard/auth-guardservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthserviceService) {
  }

  ngOnInit(): void {
  }

}
