import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app';
  rutas = [ 
    { name: 'Bizquick', ruta: 'https://ehs-institute.web.app/' , img:'../assets/renase.png' ,description:'Implementación de una página Web informativa, en conjunto con el equipo de desarrollo de la Empresa de Internet Bizquick.' },
    { name: 'Curso Introducción al Desarrollo de páginas Web', ruta: 'https://mi-portafolio-web.web.app/', img:'../assets/miportafolio.png', description:'Portafolio elaborado durante el curso Introducción al desarrollo de páginas Web, en el Instituto Tecnológico de Costa Rica.' },
    { name: 'Cronómetro', ruta: 'https://cronometro-8fe15.web.app/home', img:'../assets/cronometro.png', description:'Implementación de un crónometro responsivo, utilizando el Framework Ionic.' },
  ]
  rutas2=[
    { name: 'Notas', ruta: 'https://notas-f5bbc.web.app/home' , img:'../assets/notas.png', description:'Implementación de un página web utilizando el Framework Ionic, donde se pueden agregar notas o recordatorios.' },
    { name: 'Cards', ruta: 'https://card-flip-30aba.web.app/', img:'../assets/cards.png' ,description:'Implementación de cards giratorios, con contenido en ambos lados, utilizando HTML5 y CSS.' },
    { name: 'Background flotante', ruta: 'https://background-float.web.app/' ,img:'../assets/back.png',description:'Implementación de un background con cubos flotantes de forma ascendente, utilizando HTML5 y CSS.' }
  ]
  
}
