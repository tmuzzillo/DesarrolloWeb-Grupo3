import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitantesComponent } from './lista-solicitantes.component';

describe('ListaSolicitantesComponent', () => {
  let component: ListaSolicitantesComponent;
  let fixture: ComponentFixture<ListaSolicitantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSolicitantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaSolicitantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
