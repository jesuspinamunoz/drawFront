import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertedleaguesComponent } from './alertedleagues.component';

describe('AlertedleaguesComponent', () => {
  let component: AlertedleaguesComponent;
  let fixture: ComponentFixture<AlertedleaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertedleaguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertedleaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
