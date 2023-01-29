import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-questao3',
  templateUrl: './questao3.component.html',
  styleUrls: ['./questao3.component.css']
})
export class Questao3Component {

  resposta: boolean = false;
  mensagem: string = '';
  mensagem2: string = '';
  faturamentoMensal = [
    {
      "dia": 1,
      "valor": 22174.1664
    },
    {
      "dia": 2,
      "valor": 24537.6698
    },
    {
      "dia": 3,
      "valor": 26139.6134
    },
    {
      "dia": 4,
      "valor": 0.0
    },
    {
      "dia": 5,
      "valor": 0.0
    },
    {
      "dia": 6,
      "valor": 26742.6612
    },
    {
      "dia": 7,
      "valor": 0.0
    },
    {
      "dia": 8,
      "valor": 42889.2258
    },
    {
      "dia": 9,
      "valor": 46251.174
    },
    {
      "dia": 10,
      "valor": 11191.4722
    },
    {
      "dia": 11,
      "valor": 0.0
    },
    {
      "dia": 12,
      "valor": 0.0
    },
    {
      "dia": 13,
      "valor": 3847.4823
    },
    {
      "dia": 14,
      "valor": 373.7838
    },
    {
      "dia": 15,
      "valor": 2659.7563
    },
    {
      "dia": 16,
      "valor": 48924.2448
    },
    {
      "dia": 17,
      "valor": 18419.2614
    },
    {
      "dia": 18,
      "valor": 0.0
    },
    {
      "dia": 19,
      "valor": 0.0
    },
    {
      "dia": 20,
      "valor": 35240.1826
    },
    {
      "dia": 21,
      "valor": 43829.1667
    },
    {
      "dia": 22,
      "valor": 18235.6852
    },
    {
      "dia": 23,
      "valor": 4355.0662
    },
    {
      "dia": 24,
      "valor": 13327.1025
    },
    {
      "dia": 25,
      "valor": 0.0
    },
    {
      "dia": 26,
      "valor": 0.0
    },
    {
      "dia": 27,
      "valor": 25681.8318
    },
    {
      "dia": 28,
      "valor": 1718.1221
    },
    {
      "dia": 29,
      "valor": 13220.495
    },
    {
      "dia": 30,
      "valor": 8414.61
    }
  ]

  constructor(
    private dialogRef: MatDialogRef<Questao3Component>
  ) { }

  close(): void {
    this.dialogRef.close();
  }

  botaoResposta() {

    let menorFaturamento = 50000;
    let maiorFaturamento = 0;
    let diaMenor = 0;
    let diaMaior = 0;
    let diasMedia = 0;
    let faturamentoTotal = 0;
    let faturamentoMediaDia = 0;
    let diasMaiorFaturamento = 0;

    for (let i = 0; i < this.faturamentoMensal.length; i++) {

      if (this.faturamentoMensal[i].valor !== 0) {

        diasMedia++;
        faturamentoTotal = faturamentoTotal + this.faturamentoMensal[i].valor;
        faturamentoMediaDia = faturamentoTotal / diasMedia;

        if (this.faturamentoMensal[i].valor < menorFaturamento) {
          menorFaturamento = this.faturamentoMensal[i].valor;
          diaMenor = this.faturamentoMensal[i].dia;
        }

        if (this.faturamentoMensal[i].valor > maiorFaturamento) {
          maiorFaturamento = this.faturamentoMensal[i].valor;
          diaMaior = this.faturamentoMensal[i].dia;
        }
      }
    }

    this.faturamentoMensal.forEach(valores => {
      if (valores.valor !== 0) {
        if (valores.valor > faturamentoMediaDia) {
          diasMaiorFaturamento++
        }
      }
    });
    this.resposta = true;

    this.mensagem = `O menor Faturamento foi R$${menorFaturamento} no dia ${diaMenor} e o maior Faturamento foi R$${maiorFaturamento} no dia ${diaMaior}.`;
    this.mensagem2 = `Em ${diasMaiorFaturamento} dias o faturamento diário foi superior à média mensal.`;
  }
}
