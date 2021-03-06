import { Component, OnInit } from '@angular/core'
import { AuthService } from '../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router'
import { PlacesService } from '../services/places.service'



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  user
  routes

  constructor(public auth:AuthService, public router: ActivatedRoute, public places:PlacesService) {
    this.user = this.auth.getUser()
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user )
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.getUserId(params['id'])
    })
  }

  getUserId(id){
    this.auth.getUserId(id).subscribe(routes =>{
      this.routes = routes.user
    })
  }

  deleteRoute(route){
    let positionId = this.routes.indexOf(route)
    this.places.deleteRoute(this.routes[positionId], route.routeId._id).subscribe()
    this.routes.splice(positionId,1)
  }

}
