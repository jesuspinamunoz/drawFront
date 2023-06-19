import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsummaryComponent } from './mainsummary.component';

describe('MainsummaryComponent', () => {
  let component: MainsummaryComponent;
  let fixture: ComponentFixture<MainsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
