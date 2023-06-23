import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesummaryComponent } from './leaguesummary.component';

describe('LeaguesummaryComponent', () => {
  let component: LeaguesummaryComponent;
  let fixture: ComponentFixture<LeaguesummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaguesummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
