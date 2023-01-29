import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questao5',
  templateUrl: './questao5.component.html',
  styleUrls: ['./questao5.component.css']
})
export class Questao5Component {

  resposta: boolean = false;
  mensagem: string = '';
  palavraForm: FormGroup = this.fB.group({
    palavra: ['', [Validators.required]]
  })

  constructor(
    private dialogRef: MatDialogRef<Questao5Component>,
    private fB: FormBuilder
  ) { }


  close(): void {
    this.dialogRef.close();
  }

  botaoResposta() {
    let palavra = this.palavraForm.value.palavra;
    let palavraArray = palavra.split('');
    let palavraInvertida = '';

    for (let i = palavraArray.length - 1; i >= 0; i--) {
      palavraInvertida += palavraArray[i];
    }

    this.mensagem = palavraInvertida;   

    this.resposta = true;
  }
}
