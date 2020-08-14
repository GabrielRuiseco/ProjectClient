import { Component } from '@angular/core';
import {AuthserviceService} from './Services/Auth/authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectClient';
  constructor(public auth: AuthserviceService) {
  }
}
