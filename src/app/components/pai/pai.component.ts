import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
})
export class PaiComponent {
  dadoParaFilho: number = 5;

  valoresRecebidos: number[] = [];

  receberDado(valor: number): void {
    this.valoresRecebidos.push(valor);
    this.dadoParaFilho = valor;
  }
}