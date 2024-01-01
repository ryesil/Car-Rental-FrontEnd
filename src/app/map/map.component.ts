import { AfterViewInit, Component } from '@angular/core';
import * as L from "leaflet";
import 'leaflet-control-geocoder';
import Geocoder, { geocoders } from 'leaflet-control-geocoder';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  title = "leaf-let";

  private map: any;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map").setView([14.094167, -87.206667], 15);

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }
    ).addTo(this.map);

    tiles.addTo(this.map);

    (L.Control as any).geocoder().addTo(this.map);
  }
}
