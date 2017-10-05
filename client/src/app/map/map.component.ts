import { ElementRef, NgZone, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {PlacesService} from '../services/places.service';



interface Place{
  latitude:any;
  longitude:any;
  id:string;
  // name:string;
  // types:Array<string>;
  // photos:Array<object>;
  // address_components: Array<object>;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  latitude;
  longitude;
  id;
  // name;
  // types;
  // photos;
  // address_components;
  place:Place;


  public searchControl: FormControl;
  public zoom: number;
  @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone,
      public places:PlacesService
    ) {}

    ngOnInit() {
      //set google maps defaults
      this.zoom = 4;
      this.latitude = 39.8282;
      this.longitude = -98.5795;

      //create search FormControl
      this.searchControl = new FormControl();

      //set current position
      this.setCurrentPosition();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          types: ["establishment"]
        });
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            //get the place result
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            //verify result
            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            //set latitude, longitude and zoom
            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.id = place.id;
            // this.name = place.name;
            // this.types = place.types;
            // this.photos = place.photos;
            // this.address_components = place.address_components;


            this.zoom = 12;
            console.log(place)
          });
        });
      });
    }

    private setCurrentPosition() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 12;
        });
      }
    }



    createPlace(){
      // const {username, password} = this.formInfo;
      // if(username != "" && password != ""){
        // console.log(`Login with ${username} ${password}`)
        console.log('entro al componente')
        this.places.create(this.id, this.latitude, this.longitude).subscribe()
        // .map(place => console.log(place))
        // .subscribe()
    }


  }