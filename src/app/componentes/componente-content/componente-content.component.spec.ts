import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteContentComponent } from './componente-content.component';

describe('ComponenteContentComponent', () => {
  let component: ComponenteContentComponent;
  let fixture: ComponentFixture<ComponenteContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
