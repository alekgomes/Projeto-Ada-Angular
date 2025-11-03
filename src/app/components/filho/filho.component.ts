import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
})
export class FilhoComponent {
  // Variável recebida do pai
  @Input() dadoRecebido: number = 0;

  // Evento que envia dado para o pai
  @Output() dadoEnviado = new EventEmitter<number>();

  // Controle para desabilitar o botão
  botaoDesabilitado: boolean = false;

  // Função que emite o valor para o pai
  emitirValorParaPai(): void {
    this.botaoDesabilitado = true;

    // Emite o valor recebido + 1
    this.dadoEnviado.emit(this.dadoRecebido + 1);

    // Simula tempo de processamento
    setTimeout(() => {
      this.botaoDesabilitado = false;
    }, 1000);
  }
}