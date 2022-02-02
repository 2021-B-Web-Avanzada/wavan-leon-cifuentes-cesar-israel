import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDirectorioComponent } from './ruta-directorio.component';

describe('RutaDirectorioComponent', () => {
  let component: RutaDirectorioComponent;
  let fixture: ComponentFixture<RutaDirectorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDirectorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDirectorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
