import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaServicioComponent } from './prueba-servicio.component';

describe('PruebaServicioComponent', () => {
  let component: PruebaServicioComponent;
  let fixture: ComponentFixture<PruebaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
