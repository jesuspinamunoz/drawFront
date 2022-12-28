import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmatchinfoComponent } from './nextmatchinfo.component';

describe('NextmatchinfoComponent', () => {
  let component: NextmatchinfoComponent;
  let fixture: ComponentFixture<NextmatchinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextmatchinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextmatchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
