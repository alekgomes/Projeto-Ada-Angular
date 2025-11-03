import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pratica-material',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './pratica-material.component.html',
  styleUrl: './pratica-material.component.scss'
})
export class PraticaMaterialComponent {
  titulo = 'Shiba Inu';
  descricao = 'Detalhes do produto';

  numeros = [1, 2, 3, 4, 5];

  pessoas = [
    {
      id: 0,
      nome: 'Railan',
      idade: 37
    },
    {
      id: 1,
      nome: 'Railan2',
      idade: 372
    }
  ]

  botaoAtivo: boolean = false;
  fontSize: number = 24;

  hoje = new Date();

}
