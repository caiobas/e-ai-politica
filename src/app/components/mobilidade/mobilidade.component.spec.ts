import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilidadeComponent } from './mobilidade.component';

describe('MobilidadeComponent', () => {
  let component: MobilidadeComponent;
  let fixture: ComponentFixture<MobilidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
