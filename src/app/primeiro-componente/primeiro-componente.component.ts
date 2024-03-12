import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {
  texto = '';
  textoTemporario = '';
  aplicarClasseVermelha = false;

  atualizarTexto() {
    this.texto = this.textoTemporario;
  }

  mudarCorDoBotao() {
    this.aplicarClasseVermelha = true;
  }
}