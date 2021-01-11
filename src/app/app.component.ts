import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app';
  rutas = [ 
      { name: 'Notas', ruta: 'https://notas-f5bbc.web.app/home' , img:'../assets/notas.png' },
      { name: 'Cronometro', ruta: 'https://cronometro-8fe15.web.app/home', img:'../assets/cronometro.png' },
      { name: 'Bizquick', ruta: 'https://ehs-institute.web.app/' , img:'../assets/renase.png' }
   ]
  rutas2=[
      { name: 'Cards', ruta: 'https://card-flip-30aba.web.app/', img:'../assets/cards.png' },
      { name: 'Curso Introducción al Desarrollo de páginas Web', ruta: 'https://mi-portafolio-web.web.app/', img:'../assets/miportafolio.png' },
      { name: 'Background flotante', ruta: 'https://background-float.web.app/' ,img:'../assets/back.png' }
    ]
  
}
