import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipstermodeComponent } from './tipstermode.component';

describe('TipstermodeComponent', () => {
  let component: TipstermodeComponent;
  let fixture: ComponentFixture<TipstermodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipstermodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipstermodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
