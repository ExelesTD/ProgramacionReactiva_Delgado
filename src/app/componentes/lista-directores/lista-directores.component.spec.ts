import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDirectoresComponent } from './lista-directores.component';

describe('ListaDirectoresComponent', () => {
  let component: ListaDirectoresComponent;
  let fixture: ComponentFixture<ListaDirectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDirectoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
