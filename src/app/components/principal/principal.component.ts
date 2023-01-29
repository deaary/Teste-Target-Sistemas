import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Questao1Component } from '../questao1/questao1.component';
import { DOCUMENT } from '@angular/common';
import { Questao2Component } from '../questao2/questao2.component';
import { Questao3Component } from '../questao3/questao3.component';
import { Questao4Component } from '../questao4/questao4.component';
import { Questao5Component } from '../questao5/questao5.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(
    private dialog: MatDialog,

  ) { }

  questao1() {
    this.dialog.open(Questao1Component, {
      disableClose: true,
      width: '600px',
      height: 'auto'
    })
  }

  questao2() {
    this.dialog.open(Questao2Component, {
      disableClose: true,
      width: '1000px',
      height: 'auto'
    })
  }

  questao3() {
    this.dialog.open(Questao3Component, {
      disableClose: true,
      width: '1000px',
      height: 'auto'
    })
  }

  questao4() {
    this.dialog.open(Questao4Component, {
      disableClose: true,
      width: '1000px',
      height: 'auto'
    })
  }

  questao5() {
    this.dialog.open(Questao5Component, {
      disableClose: true,
      width: '1000px',
      height: 'auto'
    })
  }

}