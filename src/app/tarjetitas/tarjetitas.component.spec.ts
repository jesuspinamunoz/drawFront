import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetitasComponent } from './tarjetitas.component';

describe('TarjetitasComponent', () => {
  let component: TarjetitasComponent;
  let fixture: ComponentFixture<TarjetitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
