import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao4Component } from './questao4.component';

describe('Questao4Component', () => {
  let component: Questao4Component;
  let fixture: ComponentFixture<Questao4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questao4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questao4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
