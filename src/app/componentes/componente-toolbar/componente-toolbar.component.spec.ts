import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteToolbarComponent } from './componente-toolbar.component';

describe('ComponenteToolbarComponent', () => {
  let component: ComponenteToolbarComponent;
  let fixture: ComponentFixture<ComponenteToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
