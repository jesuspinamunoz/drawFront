import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BettingshopsummaryComponent } from './bettingshopsummary.component';

describe('BettingshopsummaryComponent', () => {
  let component: BettingshopsummaryComponent;
  let fixture: ComponentFixture<BettingshopsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BettingshopsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BettingshopsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
