import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app';
  rutas = [ 
      { name: 'Notas', ruta: 'https://notas-f5bbc.web.app/home' , img:'../assets/notas.png', description:'' },
      { name: 'Cronómetro', ruta: 'https://cronometro-8fe15.web.app/home', img:'../assets/cronometro.png', description:'' },
      { name: 'Bizquick', ruta: 'https://ehs-institute.web.app/' , img:'../assets/renase.png' ,description:'' }
   ]
  rutas2=[
      { name: 'Cards', ruta: 'https://card-flip-30aba.web.app/', img:'../assets/cards.png' ,description:'' },
      { name: 'Curso Introducción al Desarrollo de páginas Web', ruta: 'https://mi-portafolio-web.web.app/', img:'../assets/miportafolio.png', description:'' },
      { name: 'Background flotante', ruta: 'https://background-float.web.app/' ,img:'../assets/back.png',description:'' }
    ]
  
}
