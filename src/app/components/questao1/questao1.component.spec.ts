import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questao1Component } from './questao1.component';

describe('Questao1Component', () => {
  let component: Questao1Component;
  let fixture: ComponentFixture<Questao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Questao1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
