import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { latLng, tileLayer,LeafletMouseEvent, Marker, MarkerOptions, icon, marker } from 'leaflet';
import { LeafletModule} from '@bluehalo/ngx-leaflet';
import { Coordinates } from './Coordinates';

@Component({
  selector: 'app-map-comp',
  imports: [LeafletModule],
  templateUrl: './map-comp.component.html',
  styleUrl: './map-comp.component.css'
})
export class MapCompComponent implements OnInit {

  ngOnInit(): void {
    this.layers = this.initialCoordinates.map(value => {
      const mark = marker([value.latitude, value.lengthC], this.markerOptions);
      return mark;
    })
  }

  @Input()
  initialCoordinates: Coordinates[] = [];

  @Output()
  selectedCoordinates = new EventEmitter<Coordinates>();

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25,41],
      iconAnchor: [13,41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }

  options = {
    layers:[
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18,
        attribution: '...'
      })
    ],
    zoom:14,
    center:latLng(-16.398999564762452, -71.53694301128071)
  }

  layers: Marker<any>[] = [];

  handleClick(event: LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const lengthC = event.latlng.lng;

    this.layers = [];
    this.layers.push(marker([latitude,lengthC], this.markerOptions));
    this.selectedCoordinates.emit({latitude,lengthC});
  }
}
