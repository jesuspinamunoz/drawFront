import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaydrawinfoComponent } from './weekdaydrawinfo.component';

describe('WeekdaydrawinfoComponent', () => {
  let component: WeekdaydrawinfoComponent;
  let fixture: ComponentFixture<WeekdaydrawinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekdaydrawinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdaydrawinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
