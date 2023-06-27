import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEspaciosComponent } from './lista-espacios.component';

describe('ListaEspaciosComponent', () => {
  let component: ListaEspaciosComponent;
  let fixture: ComponentFixture<ListaEspaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEspaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
