import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRecursosComponent } from './lista-recursos.component';

describe('ListaRecursosComponent', () => {
  let component: ListaRecursosComponent;
  let fixture: ComponentFixture<ListaRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRecursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
