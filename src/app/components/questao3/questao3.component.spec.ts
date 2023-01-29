import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao3Component } from './questao3.component';

describe('Questao3Component', () => {
  let component: Questao3Component;
  let fixture: ComponentFixture<Questao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questao3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
