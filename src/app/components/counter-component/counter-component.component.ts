import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class ContadorComponent {
  valor: number = 0;
  hoje: Date = new Date();
  mensagem: string = 'Iniciar!';

  incrementar() {
    if (this.valor < 10) {
      this.valor++;
      this.mensagem = '';
    }

    if (this.valor >= 10) {
      this.mensagem = 'Você atingiu o valor máximo!';
    }
  }

  decrementar() {
    if (this.valor > 0) {
      this.valor--;
      this.mensagem = '';
    }

    if (this.valor <= 0) {
      this.mensagem = 'Iniciar!';
    }
  }
}
