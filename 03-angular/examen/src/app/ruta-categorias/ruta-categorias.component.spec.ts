import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCategoriasComponent } from './ruta-categorias.component';

describe('RutaCategoriasComponent', () => {
  let component: RutaCategoriasComponent;
  let fixture: ComponentFixture<RutaCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
