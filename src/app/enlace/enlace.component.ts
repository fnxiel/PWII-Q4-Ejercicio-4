import { Component, OnInit } from '@angular/core';
import { IEnlace } from './IEnlace';
import { IImagen } from './IImagen';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {
  enlace: IEnlace ={
    href: 'https://www.google.com',
    texto: 'Google'
  }
  imagen: IImagen ={
    src: "https://picsum.photos/300/200",
    alt: "Imagen de logo de la empresa"
  }

  constructor() { }

  ngOnInit(): void {

  }

}
