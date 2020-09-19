import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaneamentoComponent } from './saneamento.component';

describe('SaneamentoComponent', () => {
  let component: SaneamentoComponent;
  let fixture: ComponentFixture<SaneamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaneamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaneamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
