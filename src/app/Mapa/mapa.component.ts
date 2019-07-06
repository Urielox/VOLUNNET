import { Component } from '@angular/core';

@Component({
  selector: 'mapa-component',
  templateUrl: 'mapa.component.html',
  styleUrls: ['mapa.component.css'],
})
export class MapaComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(){
      
  }
}