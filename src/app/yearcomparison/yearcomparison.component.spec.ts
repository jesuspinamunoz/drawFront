import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearcomparisonComponent } from './yearcomparison.component';

describe('YearcomparisonComponent', () => {
  let component: YearcomparisonComponent;
  let fixture: ComponentFixture<YearcomparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearcomparisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearcomparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
