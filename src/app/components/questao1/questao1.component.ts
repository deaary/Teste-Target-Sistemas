import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questao1',
  templateUrl: './questao1.component.html',
  styleUrls: ['./questao1.component.css']
})
export class Questao1Component {

  resposta: boolean = false;  
  mensagem: string = '';

  constructor(
    private dialogRef: MatDialogRef<Questao1Component>
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  botaoResposta() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }
    this.mensagem = `O Valor da variável Soma é de ${soma}.`   
    this.resposta = true;
  }
}
