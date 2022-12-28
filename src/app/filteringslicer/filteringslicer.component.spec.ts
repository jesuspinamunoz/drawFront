import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringslicerComponent } from './filteringslicer.component';

describe('FilteringslicerComponent', () => {
  let component: FilteringslicerComponent;
  let fixture: ComponentFixture<FilteringslicerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteringslicerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteringslicerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
