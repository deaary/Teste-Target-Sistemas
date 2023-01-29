import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questao4',
  templateUrl: './questao4.component.html',
  styleUrls: ['./questao4.component.css']
})
export class Questao4Component {

  resposta: boolean = false;
  mensagem: any[] = [];
  faturamentoMensalEstado = [
    {
        'Estado': 'SP',
        'Valor': 67836.43
    },
    {
        'Estado': 'RJ' ,
        'Valor': 36678.66
    },
    {
        'Estado': 'MG',
        'Valor': 29229.88
    },
    {
        'Estado': 'ES',
        'Valor': 27165.48
    },
    {
        'Estado': 'Outros',
        'Valor': 19849.53
    }
]

  constructor(
    private dialogRef: MatDialogRef<Questao4Component>
  ){}

  close(): void {
    this.dialogRef.close();
  }

  botaoResposta() {
    
  let faturamentoTotal = 0;
  let percentual = 0;
  
  for (let total in this.faturamentoMensalEstado) {
      faturamentoTotal = faturamentoTotal + this.faturamentoMensalEstado[total].Valor
  }
  
  this.faturamentoMensalEstado.forEach(valor => {
      percentual = (valor.Valor / faturamentoTotal) * 100;   
      this.mensagem.push(`${valor.Estado} tem ${percentual.toFixed(2)}% do faturamento total da empresa.`)           
  });
   
    this.resposta = true;
  }
}
