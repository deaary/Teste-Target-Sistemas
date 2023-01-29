import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao5Component } from './questao5.component';

describe('Questao5Component', () => {
  let component: Questao5Component;
  let fixture: ComponentFixture<Questao5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questao5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questao5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
