import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PraticaMaterialComponent } from './components/pratica-material/pratica-material.component';
import { ContadorComponent } from './components/counter-component/counter-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PraticaMaterialComponent, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
