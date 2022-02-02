import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBusquedaComponent } from './ruta-busqueda.component';

describe('RutaBusquedaComponent', () => {
  let component: RutaBusquedaComponent;
  let fixture: ComponentFixture<RutaBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaBusquedaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
