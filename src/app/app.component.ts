import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'my-app';
  rutas = [{ name: 'Card', ruta: 'https://card-flip-30aba.web.app/' },
    { name: 'Portafolio', ruta: 'https://mi-portafolio-web.web.app/' },
    { name: 'Back', ruta: 'https://background-float.web.app/' },
    { name: 'Notas', ruta: 'https://notas-f5bbc.web.app/home' },
    { name: 'Cronometro', ruta: 'https://cronometro-8fe15.web.app/home' }
  ]
}
