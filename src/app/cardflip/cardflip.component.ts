import { Component, OnInit } from '@angular/core';
import { IPersona, IPhoto } from '../interfaces/interfaces';

@Component({
  selector: 'app-cardflip',
  templateUrl: './cardflip.component.html',
  styleUrls: ['./cardflip.component.scss']
})
export class CardflipComponent implements OnInit {

  public alumnos: IPersona[] = [
    {
      nombre: "Juan",
      edad: 34,
      imagen: {
        src: "https://i.ytimg.com/vi/BkgA2_sB6NM/maxresdefault.jpg",
        alt: "Juan."
      },
      cascos: true,
      gafas: true,
      motivacion: 100,
      felicidad: 70,
      descripcion: "Hola soy Juan tengo 34 años me gustan los videojuegos, bailar y el teatro."
    },
    {
      nombre: "Ariel",
      edad: 27,
      imagen: {
        src: "https://static2.abc.es/media/play/2019/07/04/sirenita-kuRD--1200x630@abc.jpg",
        alt: "Ariel"
      },
      cascos: true,
      gafas: false,
      motivacion: 100,
      felicidad: 100,
      descripcion: "Hola soy Ariel tengo 27 años y me gusta el front-end."
    }
  ]

  public prohibido: IPhoto = {
    src: "https://cdn-icons-png.flaticon.com/512/1574/1574337.png",
    alt: "prohibido"
  }

  public cascos: IPhoto = {
    src: "https://resource.logitechg.com/d_transparent.gif/content/dam/gaming/en/products/g733/gallery/g733-white-gallery-1.png",
    alt: "cascos"
  }

  public gafas: IPhoto = {
    src: "https://cdn.shopify.com/s/files/1/1075/3858/files/NCR103018-img4.png",
    alt: "gafas"
  }

  public cartaFront: boolean = true;

  // generación de la función dar vuelta para cambiar el valor de la variable y pintar la carta por delante o por detrás
  public darVuelta = (): void => {
    if (this.cartaFront) {
      this.cartaFront = false
    } else {
      this.cartaFront = true
    }
  }

  constructor() { }

  ngOnInit(): void {



  }

}
