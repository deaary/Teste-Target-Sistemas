import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questao2',
  templateUrl: './questao2.component.html',
  styleUrls: ['./questao2.component.css']
})
export class Questao2Component {

  resposta: boolean = false;
  mensagem: string = '';
  numeroForm: FormGroup = this.fB.group({
    numero: ['', [Validators.required]]
  })

  constructor(
    private dialogRef: MatDialogRef<Questao2Component>,
    private fB: FormBuilder
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  botaoResposta() {
    let numeroEscolhido = this.numeroForm.value.numero;
    let n1 = 0;
    let n2 = 1;
    let numero = 0;

    while (numero < numeroEscolhido) {
      numero = n2 + n1;
      n1 = n2;
      n2 = numero;

      if (numero > numeroEscolhido) {
        this.mensagem = `O número informado(${numeroEscolhido}) não pertence a sequência de Fibonacci`;        
      }
      else if (numero === numeroEscolhido) {
        this.mensagem = `O número informado(${numeroEscolhido}) pertence a sequência de Fibonacci`;
      }
    }

    this.resposta = true;
  }

}
