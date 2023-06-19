import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueinfoComponent } from './leagueinfo.component';

describe('LeagueinfoComponent', () => {
  let component: LeagueinfoComponent;
  let fixture: ComponentFixture<LeagueinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeagueinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
