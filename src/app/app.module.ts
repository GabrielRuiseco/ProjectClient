import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

// Services
import {AuthserviceService} from './Services/Auth/authservice.service';
import {AuthGuardserviceService} from './Services/Auth-Guard/auth-guardservice.service';
import {TokenInterceptorService} from './Services/token-interceptor.service';

// Routes
import {APP_ROUTING} from './Routes/app.routes';

// Components
import {AppComponent} from './app.component';
import {NavbarComponent} from './Components/MasterComponents/navbar/navbar.component';
import {HomeComponent} from './Components/MasterComponents/home/home.component';
import {LoginComponent} from './Components/UserComponents/login/login.component';
import {ProfileComponent} from './Components/UserComponents/profile/profile.component';
import {RegisterComponent} from './Components/UserComponents/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    AuthserviceService,
    AuthGuardserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
