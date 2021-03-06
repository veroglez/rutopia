import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { NgModule, ApplicationRef } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Packages
import { AgmCoreModule, GoogleMapsAPIWrapper } from 'angular2-google-maps/core'

// Directives
import { DirectionsMapDirective } from './map/google-map.directive'

// Components
import { MapComponent } from './map/map.component'
import { HomeComponent } from './home/home.component'
import { NewRouteComponent } from './new-route/new-route.component'
import { LoginformComponent } from './loginform/loginform.component'
import { SignupformComponent } from './signupform/signupform.component'
import { UserprofileComponent } from './userprofile/userprofile.component'
import { EditprofileComponent } from './editprofile/editprofile.component'
import { NewRouteDataComponent } from './new-route-data/new-route-data.component'

// Services
import { AuthService } from './services/auth.service'
import { PlacesService } from './services/places.service'
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service'

import { routes } from './routes';
import { ShowRoutesComponent } from './show-routes/show-routes.component';
import { ShowSimpleRouteComponent } from './show-simple-route/show-simple-route.component'
@NgModule({
  declarations: [
    AppComponent,
    SignupformComponent,
    LoginformComponent,
    UserprofileComponent,
    EditprofileComponent,
    MapComponent,
    NewRouteComponent,
    NewRouteDataComponent,
    HomeComponent,
    DirectionsMapDirective,
    ShowRoutesComponent,
    ShowSimpleRouteComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAdiKx5c_lSDsGJW8KhCDm9Yid5YefDBnA',
      libraries: ["places"]
    }),
    ReactiveFormsModule
  ],
  providers: [AuthService, IsLoggedInService, PlacesService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
